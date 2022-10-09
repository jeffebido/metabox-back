import { insert } from '../repositories/modelsRepository'

import { CreateModelsData } from '../types/modelsTypes';


export async function createModel(data: CreateModelsData){
    
    
    await insert(data);
}