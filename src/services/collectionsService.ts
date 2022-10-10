import { nanoid } from 'nanoid'

import { insert, getByUserId, getBySlug } from '../repositories/collectionsRepository'

import { CreateCollectionData } from '../types/collectionsTypes';

import * as error from '../utils/errors'

export async function createCollection(data: CreateCollectionData){
    
    const url = nanoid(30);
    
    await insert({...data, publicUrlSlug: url});
}

export async function getCollectionsByUser(userId: number){
    
    return await getByUserId(userId);
}

export async function getCollectionBySlug(slug: string){
    

    const collection = await getBySlug(slug);

    if(!collection){
        throw error.notFound();
    }

    return collection;
}