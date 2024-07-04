import { Types } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  releaseDate?: string;
  brand?: string;
  operatingSystem?: string;
  storage?: string;
  screenSize?: string;
  cameraQuality?: string;
  batteryLife?: string;
};

export type TSellDetails = {
  nameOfTheBuyer: string;
  sellingQuantity: number;
  sellingDate: string;
  product: Types.ObjectId;
};
