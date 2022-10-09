import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().max(100).required(),
    email: joi.string().max(100).email().required(),
    profileImg: joi.string().max(500).required(),
    password: joi.string().max(50).required(),
    confirmPassword: joi.string().max(50).required().valid(joi.ref('password'))
});

const loginSchema = joi.object({
    email: joi.string().max(100).email().required(),
    password: joi.string().max(50).required()
});


export {signUpSchema, loginSchema};