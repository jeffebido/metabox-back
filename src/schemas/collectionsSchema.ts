import joi from 'joi';

const collectionsSchema = joi.object({
	name: joi.string().max(200).required(),
    description: joi.string().max(5000).required(),
    coverImg: joi.string().max(1000).required()
});


export {collectionsSchema};