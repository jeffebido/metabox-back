import { Request, Response } from 'express';
import * as modelsService from '../services/modelsService';


export async function uploadModel(req: Request, res: Response) {

    if (req.file) {
        return res.json({
            response: req.file,
        });
    }
    
    res.sendStatus(409);
}

export async function createModel(req: Request, res: Response) {
    

    await modelsService.createModel({...req.body});

    res.sendStatus( 201 );
}