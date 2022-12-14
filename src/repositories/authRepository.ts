import prisma from '../db';
import { users } from '@prisma/client';
import  { CreateUserData }  from '../types/authTypes';

export async function createUser(user: CreateUserData) {
    await prisma.users.create({ data: user });
}

export async function getUserByEmail(email: string) {
    return await prisma.users.findUnique({ where: { email:email } });
}