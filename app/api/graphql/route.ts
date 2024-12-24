import Cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from '@/graphql/typeDefs';
import { resolvers } from '@/graphql/resolvers';
import { createContext, Context } from '@/graphql/context';
import initMiddleware from '@/lib/init-middleware';

initMiddleware(
  Cors({
      methods: ['GET', 'POST', 'OPTIONS'],
      origin: '*',
  })
);


const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => createContext(req, res),
});


export const GET = handler;
export const POST = handler;
