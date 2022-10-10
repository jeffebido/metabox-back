import prisma from '../db';
import { models } from '@prisma/client';

import { CreateModelsData } from '../types/modelsTypes';


export async function insert(modelData: CreateModelsData) {
    
    
    await prisma.models.create({ data: modelData });
}

export async function getByCollectionId(collectionId: number) {
    
    return prisma.models.findMany({
        where: { collectionId: collectionId }
    });
}

export async function getById(id: number) {
    
    return prisma.models.findUnique({
        where: { id: id }
    });
}
