import prisma from '../db';
import { collections } from '@prisma/client';

import { CreateCollectionData } from '../types/collectionsTypes';


export async function insert(collectionData: CreateCollectionData) {
    
    
    await prisma.collections.create({ data: collectionData });
}
