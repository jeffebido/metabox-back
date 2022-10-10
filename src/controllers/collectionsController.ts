import { Request, Response } from 'express';
import * as collectionsService from '../services/collectionsService';


export async function createCollection(req: Request, res: Response) {
    

    await collectionsService.createCollection({...req.body, userId:res.locals.user.id});

    res.sendStatus( 201 );
}

export async function getCollectionsByUser(req: Request, res: Response) {
    
    const { userId } = req.params;

    const collections = await collectionsService.getCollectionsByUser(+userId);

    res.send( collections );
}

export async function getCollectionBySlug(req: Request, res: Response) {
    
    const { slug } = req.params;

    const collection = await collectionsService.getCollectionBySlug(slug);

    res.send( collection );
}