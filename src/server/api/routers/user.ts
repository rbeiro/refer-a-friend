import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { setCookie } from "nookies";

export const userRouter = createTRPCRouter({
  addAdditionalDataToCookies: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        phoneNumber: z.number(),
      })
    )
    .mutation(({ input, ctx }) => {
      const { res } = ctx;

      setCookie(
        { res },
        "@will-have-a-name:additionalUserData",
        JSON.stringify({ name: input.name, phoneNumber: input.phoneNumber }),
        {
          maxAge: 60 * 60 * 60 * 24 * 7, // 7 days
          path: "/",
        }
      );
    }),
});
