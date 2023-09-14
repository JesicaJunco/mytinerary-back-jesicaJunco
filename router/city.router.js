import express from "express";
import cityController from '../controllers/city.controller.js';
import { validator } from "../middlewares/validator.js";
import { createCitySchema } from "../schema/city.schema.js";
import { Admin } from "../middlewares/Admin.middleware.js";
import passport from "../middlewares/passport.js";

const router = express.Router();
const {getCities, createCity, getCityById, updateCity, deleteCity} = cityController;


router.get('/', getCities)

router.get('/:id', getCityById)

router.post('/', validator(createCitySchema), passport.authenticate('jwt', { session: false }), createCity)

router.put('/:id', passport.authenticate('jwt', { session: false }), Admin,  updateCity)

router.delete('/:id', passport.authenticate('jwt', { session: false }), Admin, deleteCity)

export default router;