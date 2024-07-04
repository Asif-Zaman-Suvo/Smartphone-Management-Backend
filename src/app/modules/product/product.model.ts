/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';
import { TProduct, TSellDetails } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    releaseDate: { type: String },
    brand: { type: String },
    operatingSystem: { type: String },
    storage: { type: String },
    screenSize: { type: String },
    cameraQuality: { type: String },
    batteryLife: { type: String },
  },
  {
    timestamps: true,
  },
);

const sellDetailsSchema = new Schema(
  {
    nameOfTheBuyer: { type: String, required: true },
    sellingQuantity: { type: Number, required: true },
    sellingDate: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
export const SellProduct = model<TSellDetails>(
  'SellProduct',
  sellDetailsSchema,
);
