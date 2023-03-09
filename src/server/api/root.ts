import { exampleRouter } from '~/server/api/routers/example';
import { friendsRouter } from '~/server/api/routers/friends';
import { wishlistRouter } from '~/server/api/routers/wishlist';
import { createTRPCRouter } from '~/server/api/trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  wishlist: wishlistRouter,
  friends: friendsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
