import Joi from '@hapi/joi'

export const registrationSchema = Joi.object({
    firstName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(255).required(),
    lastName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
    confirmPassword: Joi.ref('password'),
  });
  export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  });