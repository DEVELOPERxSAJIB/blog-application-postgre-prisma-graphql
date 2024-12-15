import { PrismaClient } from "@prisma/client";

type LinkArgs = {
  id: string;
  title: string;
  description: string;
  url: string;
  categories: string;
  imageURL: string;
  userId: string;
};

export const resolvers = {
  Query: {
    links: async (
      _parent: unknown,
      _args: unknown,
      ctx: { prisma: PrismaClient }
    ) =>
      await ctx.prisma.link.findMany({
        include: {
          user: true,
        },
      }),

    link: async (
      _parent: unknown,
      _args: LinkArgs,
      ctx: { prisma: PrismaClient }
    ) =>
      await ctx.prisma.link.findUnique({
        where: { id: _args.id },
        include: {
          user: true,
        },
      }),

    users: async (
      _parent: unknown,
      _args: unknown,
      ctx: { prisma: PrismaClient }
    ) =>
      await ctx.prisma.user.findMany({
        include: {
          links: true,          
        },
      }),
  },

  Mutation: {
    addLink: async (
      _parent: unknown,
      _args: LinkArgs,
      ctx: { prisma: PrismaClient }
    ) => {
      // Create the link first
      const createdLink = await ctx.prisma.link.create({
        data: {
          id: _args?.id,
          title: _args.title,
          description: _args.description,
          url: _args.url,
          imageURL: _args.imageURL,
          categories: _args.categories,
          userId: _args.userId,
        },
      });

      // Fetch the user related to the link using the userId
      const user = await ctx.prisma.user.findUnique({
        where: { id: _args.userId },
      });

      // Return the created link along with the user data
      return {
        ...createdLink,
        user,
      };
    },

    addToBookmark: async (
      _parent: unknown,
      _args: { userId: string; linkId: string },
      ctx: { prisma: PrismaClient }
    ) => {
      const { userId, linkId } = _args;
  
      // Check if the user exists
      const user = await ctx.prisma.user.findUnique({
        where: { id: userId },
      });
  
      // Check if the link exists
      const link = await ctx.prisma.link.findUnique({
        where: { id: linkId },
      });
  
      if (!user) {
        throw new Error("User not found");
      }
      if (!link) {
        throw new Error("Link not found");
      }
  
      // Add the link to the user's bookmarks
      // const updatedUser = await ctx.prisma.user.update({
      //   where: { id: userId },
      //   data: {
      //     bookmarks: {
      //       connect: { id: linkId },
      //     },
      //   },
      //   include: {
      //     bookmarks: true,
      //   },
      // });
  
      // return updatedUser.bookmarks.find(bookmark => bookmark.id === linkId);
    },

    updateLink: async (
      _parent: unknown,
      _args: LinkArgs,
      ctx: { prisma: PrismaClient }
    ) =>
      await ctx.prisma.link.update({
        where: {
          id: _args.id,
        },
        data: {
          title: _args.title,
          description: _args.description,
          url: _args.url,
          categories: _args.categories,
          imageURL: _args.imageURL,
        },
      }),

    deleteLink: async (
      _parent: unknown,
      _args: LinkArgs,
      ctx: { prisma: PrismaClient }
    ) =>
      await ctx.prisma.link.delete({
        where: {
          id: _args.id,
        },
      }),
  },
};
