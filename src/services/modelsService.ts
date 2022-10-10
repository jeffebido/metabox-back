import { insert, getByCollectionId, getById } from '../repositories/modelsRepository'

import { CreateModelsData } from '../types/modelsTypes';

import * as error from '../utils/errors'

export async function createModel(data: CreateModelsData){
    
    
    await insert(data);
}

export async function getModelsByCollection(collectionId: number){
    
    const models = await getByCollectionId(collectionId);

    if(!models){
        throw error.notFound();
    }

    return models;
}

export async function getModelById(id: number){
    
    const model = await getById(id);

    if(!model){
        throw error.notFound();
    }

    return model;
}