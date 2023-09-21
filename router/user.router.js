import express from "express";
import usersController from "../controllers/user.controller.js";
import { validator } from "../middlewares/validator.js";
import { validateSignUp } from "../schema/user.schema.js";


const router = express.Router()

const { getUsers, createUser, getUserById, updateUser, deleteUser }= usersController;

router.get('/', getUsers);

router.get('/:id', getUserById)

router.post('/',validator(validateSignUp), createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;