import {
  createTRPCRouter,
  adminProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import dayjs from "dayjs";
import { z } from "zod";

export const timeIntervalsRouter = createTRPCRouter({
  create: adminProcedure
    .input(
      z.object({
        intervals: z.array(
          z.object({
            weekDay: z.number(),
            startTimeInMinutes: z.number(),
            endTimeInMinutes: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { session, prisma } = ctx;

      if (!session || session.user.role !== "ADMIN") {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      await prisma.userTimeInterval.createMany({
        data: input.intervals.map((interval) => {
          return {
            week_day: interval.weekDay,
            time_start_in_minutes: interval.startTimeInMinutes,
            time_end_in_minutes: interval.endTimeInMinutes,
            userId: session.user.id,
          };
        }),
      });
    }),
  availability: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input, ctx }) => {
      const { date } = input;
      const { prisma } = ctx;

      const referenceDate = dayjs(String(date));
      const isPastDate = referenceDate.endOf("day").isBefore(new Date());

      if (isPastDate) return { availability: [] };

      const userAvailability = await prisma.userTimeInterval.findFirst({
        where: {
          //userId: user.id
          week_day: referenceDate.get("day"),
        },
      });

      if (!userAvailability) return { availability: [] };

      const { time_start_in_minutes, time_end_in_minutes } = userAvailability;

      const startHour = time_start_in_minutes / 60;
      const endHour = time_end_in_minutes / 60;

      const possibleTimes = Array.from({ length: endHour - startHour }).map(
        (_, i) => {
          return startHour + i;
        }
      );

      const blockedTimes = await prisma.scheduling.findMany({
        select: {
          date: true,
        },
        where: {
          //user_id: user.id,
          date: {
            gte: referenceDate.set("hour", startHour).toDate(),
            lte: referenceDate.set("hour", endHour).toDate(),
          },
        },
      });

      const availableTimes = possibleTimes.filter((time) => {
        return !blockedTimes.some(
          (blockedTime) => blockedTime.date.getHours() === time
        );
      });

      return { possibleTimes, availableTimes };
    }),
  blockedDates: publicProcedure
    .input(
      z
        .object({
          year: z.string(),
          month: z.string(),
        })
        .partial()
        .refine(
          ({ month, year }) => month !== undefined || year !== undefined,
          {
            message: "One of the fields must be defined",
          }
        )
    )
    .query(async ({ input, ctx }) => {
      const { prisma } = ctx;
      const { year, month } = input;
      const availableWeekDays = await prisma.userTimeInterval.findMany({
        select: {
          week_day: true,
        },
      });
      const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter(
        (weekDay) =>
          !availableWeekDays.some(
            (availableWeekDay) => availableWeekDay.week_day === weekDay
          )
      );
      return { blockedWeekDays };
    }),
});
