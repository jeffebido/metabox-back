import joi from 'joi';

const modelsSchema = joi.object({
	name: joi.string().max(200).required(),
    description: joi.string().max(5000).required(),
    collectionId: joi.number().required()
});


export {modelsSchema};