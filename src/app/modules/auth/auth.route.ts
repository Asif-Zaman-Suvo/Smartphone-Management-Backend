import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.registrationValidationSchema),
  AuthControllers.registerUserController,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUserController,
);

export const AuthRoutes = router;
