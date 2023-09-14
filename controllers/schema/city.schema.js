import Joi from "joi"
export const createCitySchema = Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().required().uri(),
    detail: Joi.string(),
    price: Joi.number()
})
