import { Request, Response, NextFunction } from 'express';

import {modelsSchema} from "../schemas/modelsSchema";

export async function modelsMiddleware(req:Request, res:Response, next:NextFunction) {
    
    const validate = modelsSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

    next();
}


