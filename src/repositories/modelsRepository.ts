import prisma from '../db';
import { models } from '@prisma/client';

import { CreateModelsData } from '../types/modelsTypes';


export async function insert(modelData: CreateModelsData) {
    
    console.log(modelData)
    //await prisma.models.create({ data: modelData });
}
