import prisma from '../db';
import { models } from '@prisma/client';

import { CreateModelsData } from '../types/modelsTypes';


export async function insert(modelData: CreateModelsData) {
    
    
    await prisma.models.create({ data: modelData });
}
