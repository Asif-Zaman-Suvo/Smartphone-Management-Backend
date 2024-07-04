import { FilterQuery } from 'mongoose';
import { TProduct, TSellDetails } from './product.interface';
import { Product, SellProduct } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (filter?: FilterQuery<TProduct>) => {
  const filterObject = filter || {};
  const result = await Product.find(filterObject);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const saleProductFromDB = async (productId: string, payload: TSellDetails) => {
  const { nameOfTheBuyer, sellingDate, sellingQuantity } = payload;

  const product = await getSingleProductFromDB(productId);

  if (!product) {
    throw new Error('Can not find product');
  }

  if (product.quantity < sellingQuantity) {
    throw new Error('Not enough quantity to sell');
  }

  const updateProductQuantity = product.quantity - sellingQuantity;

  const updatedProduct = await updateProductIntoDB(productId, {
    quantity: updateProductQuantity,
  });

  if (updateProductQuantity === 0) {
    await deleteProductFromDB(productId);
  }

  await SellProduct.create({
    product: productId,
    nameOfTheBuyer,
    sellingQuantity,
    sellingDate,
  });

  return {
    updatedProduct: {
      ...updatedProduct?.toObject(),
      quantity: sellingQuantity,
    },
    nameOfTheBuyer,
    sellingDate,
  };
};

const getAllSaleProductsFromDB = async (
  filter?: FilterQuery<TSellDetails>,
  timeFrame?: string,
) => {
  const filterObject = filter || {};
  let result;

  switch (timeFrame) {
    case 'weekly':
      result = await SellProduct.find({
        ...filterObject,
        sellingDate: {
          $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      }).populate('product');
      break;
    case 'daily':
      result = await SellProduct.find({
        ...filterObject,
        sellingDate: {
          $gte: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
      }).populate('product');
      break;
    case 'monthly':
      result = await SellProduct.find({
        ...filterObject,
        sellingDate: {
          $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      }).populate('product');
      break;
    case 'yearly':
      result = await SellProduct.find({
        ...filterObject,
        sellingDate: {
          $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        },
      }).populate('product');
      break;
    default:
      result = await SellProduct.find(filterObject).populate('product');
      break;
  }

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  saleProductFromDB,
  getAllSaleProductsFromDB,
};
