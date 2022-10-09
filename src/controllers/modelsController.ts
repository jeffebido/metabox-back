import { Request, Response } from 'express';
import * as modelsService from '../services/modelsService';


export async function createModel(req: Request, res: Response) {
    

    await modelsService.createModel({...req.body});

    res.sendStatus( 201 );
}