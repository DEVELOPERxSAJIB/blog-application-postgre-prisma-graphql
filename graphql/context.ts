import prisma from '@/prisma/db';
import { PrismaClient } from '@prisma/client';


export type Context = {
    prisma : PrismaClient
};

export async function createContext(req, res) : Promise<Context> {
    return {
        prisma : prisma,
    }
}