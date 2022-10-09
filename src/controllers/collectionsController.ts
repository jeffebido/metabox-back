import { Request, Response } from 'express';
import * as collectionsService from '../services/collectionsService';


export async function createCollection(req: Request, res: Response) {
    

    await collectionsService.createCollection({...req.body, userId:res.locals.user.id});

    res.send( 201 );
}