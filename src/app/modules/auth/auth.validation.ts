import { z } from 'zod';

const registrationValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Username must be provided' }),
    email: z.string().email(),
    password: z.string({ required_error: 'Password is required' }),
    role: z.enum(['superAdmin', 'manager', 'seller']),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Username must be provided' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  registrationValidationSchema,
  loginValidationSchema,
};
