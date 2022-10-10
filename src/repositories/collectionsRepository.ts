import prisma from '../db';
import { collections } from '@prisma/client';
import { models } from '@prisma/client';

import { CreateCollectionData } from '../types/collectionsTypes';


export async function insert(collectionData: CreateCollectionData) {
    
    
    await prisma.collections.create({ data: collectionData });
}

export async function getByUserId(userId: number) {
    
    return prisma.collections.findMany({
        where: { userId: userId }
    });
}

export async function getBySlug(slug: string) {
    
    return prisma.collections.findUnique({
        where: { publicUrlSlug: slug }
    });
    
}
