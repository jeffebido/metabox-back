import { nanoid } from 'nanoid'

import { insert } from '../repositories/collectionsRepository'

import { CreateCollectionData } from '../types/collectionsTypes';


export async function createCollection(data: CreateCollectionData){
    
    const url = nanoid(30);
    
    await insert({...data, publicUrlSlug: url});
}