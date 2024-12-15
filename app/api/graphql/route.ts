import { Context, createContext } from '@/graphql/context';
import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/typeDefs';
import prisma from '@/prisma/db';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';


// Create Apollo Server instance
const apolloServer = new ApolloServer<Context>({
  typeDefs : typeDefs,
  resolvers : resolvers,
  context: async () => createContext(),
});

// Export handlers for each HTTP method
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context : async (req, res) => ({req, res, prisma})
});

export const GET = handler;
export const POST = handler;


// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { ApolloServer } from "@apollo/server";
// import { NextRequest } from "next/server";
// import { typeDefs } from "@/graphql/typeDefs";
// import { resolvers } from "@/graphql/resolvers";

// // Create Apollo Server instance
// const apolloServer = new ApolloServer({
//   typeDefs : typeDefs,
//   resolvers : resolvers,
// });

// // Export handlers for each HTTP method
// const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
//   context: async (req, res) => ({ req, res }),
// });

// export { handler as GET, handler as POST };
