import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { schedulingRouter } from "./routers/scheduling";
import { timeIntervalsRouter } from "./routers/time-intervals";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  scheduling: schedulingRouter,
  timeIntervals: timeIntervalsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
