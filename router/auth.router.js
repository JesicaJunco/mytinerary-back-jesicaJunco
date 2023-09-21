import express from 'express';
import authController from '../controllers/auth.controller.js';
import { accountExistSignup } from '../middlewares/auth/accountExistSignup.middleware.js';
import { accountExistSignIn } from '../middlewares/auth/accountExistSignIn.middleware.js';
import { accountHasBeenVerified } from '../middlewares/auth/accountHasBeenVerified.middleware.js';
import { passwordIsOk } from '../middlewares/auth/passwordIsOk.middleware.js';
import passport from '../middlewares/passport.js';
import { validateSignIn, validateSignUp} from '../schema/user.schema.js';
import { validator } from '../middlewares/validator.js';


const { signup, signin, signout, token, googleSignin } = authController;

const router = express.Router();

router.post('/signup', validator(validateSignUp), accountExistSignup,signup)

router.post('/signin', validator(validateSignIn), accountExistSignIn, accountHasBeenVerified, passwordIsOk, signin)

router.post('/google', googleSignin)

router.post('/signout', passport.authenticate('jwt', { session: false }), signout)

router.post('/token', passport.authenticate('jwt', { session: false }), token)

export default router;