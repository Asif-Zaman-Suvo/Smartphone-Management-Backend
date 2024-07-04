import { z } from 'zod';

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    quantity: z.number().positive(),
    releaseDate: z.string().min(1).optional(),
    brand: z.string().min(1).optional(),
    operatingSystem: z.string().min(1).optional(),
    storage: z.string().min(1).optional(),
    screenSize: z.string().min(1).optional(),
    cameraQuality: z.string().min(1).optional(),
    batteryLife: z.string().min(1).optional(),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    price: z.number().positive().optional(),
    quantity: z.number().positive().optional(),
    releaseDate: z.string().min(1).optional(),
    brand: z.string().min(1).optional(),
    operatingSystem: z.string().min(1).optional(),
    storage: z.string().min(1).optional(),
    screenSize: z.string().min(1).optional(),
    cameraQuality: z.string().min(1).optional(),
    batteryLife: z.string().min(1).optional(),
  }),
});

export const sellProductValidationSchema = z.object({
  body: z.object({
    nameOfTheBuyer: z.string().min(1),
    sellingQuantity: z.number().positive(),
    sellingDate: z.string().min(1),
  }),
});
