import joi from 'joi';

const patientRegistrationSchema = joi.object({
  name: joi.string().min(3).max(60).required(),
  email: joi.string().email({ tlds: { allow: false } }).max(60).required(),
  password: joi.string().min(3).max(60).required(),
  repeatPassword: joi.ref('password')
});

const medicReistrationSchema = joi.object({
  name: joi.string().min(3).max(60).required(),
  email: joi.string().email({ tlds: { allow: false } }).max(60).required(),
  password: joi.string().min(3).max(60).required(),
  repeatPassword: joi.ref('password'),
  phone: joi.string().length(11).pattern(/^[0-9]+$/).required(),
  CRM: joi.string().max(6).pattern(/^[0-9]+$/).required(),
});

export { patientRegistrationSchema, medicReistrationSchema }