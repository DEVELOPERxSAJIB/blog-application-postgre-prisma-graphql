import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/typeDefs";
import { resolvers } from "@/graphql/resolvers";
import { createContext, Context } from "@/graphql/context";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import { NextResponse } from "next/server";


// Initialize Apollo Server
const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection : true,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: "my-graph-id@my-graph-variant",
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

// CORS Middleware
const corsMiddleware = async (handler, req) => {
  if (req.method === "OPTIONS") {
    return NextResponse.json(
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );
  }

  const response = await handler(req);
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true"); 
  return response;
};

// Create the handler
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => createContext(req, res),
});

// Wrap the handler with the CORS middleware
const wrappedHandler = async (req) => corsMiddleware(handler, req);
export const GET = wrappedHandler;
export const POST = wrappedHandler;

