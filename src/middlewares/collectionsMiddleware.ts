import { Request, Response, NextFunction } from 'express';

import {collectionsSchema} from "../schemas/collectionsSchema";

export async function collectionsMiddleware(req:Request, res:Response, next:NextFunction) {
    
    const validate = collectionsSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

    next();
}


