import { NextResponse } from "next/server";
import Cors from "cors";

// Initialize CORS
const cors = Cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

// Helper function to run the middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Create a middleware function that wraps the Apollo handler with CORS
export async function middleware(req) {
  const res = NextResponse.next();
  await runMiddleware(req, res, cors);
  
  return res;
}

