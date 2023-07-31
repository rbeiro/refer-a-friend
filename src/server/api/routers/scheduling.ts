import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { setCookie } from "nookies";
import dayjs from "dayjs";

export const schedulingRouter = createTRPCRouter({
  checkAvailability: publicProcedure
    .input(
      z.object({
        date: z
          .string({
            required_error: "Date not provided.",
          })
          .min(1),
      })
    )
    .query(({ input, ctx }) => {
      const referenceDate = dayjs(input.date);
      const isPastDate = referenceDate.endOf("day").isBefore(new Date());

      if (isPastDate) {
        return { availability: [] };
      }
    }),
});
