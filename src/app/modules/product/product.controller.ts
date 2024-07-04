import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { ProductServices } from './product.service';
import sendResponse from '../../utils/sendResponse';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Product is created succesfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const { brand, priceRange } = req.query;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = {};
  if (brand) {
    filter.brand = brand;
  }
  if (priceRange) {
    const priceRangeString: string = priceRange as string;
    const [minPrice, maxPrice] = priceRangeString.split('-');
    filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
  }
  // Call the getAllProductFromDB service function with the filter
  const result = await ProductServices.getAllProductFromDB(filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products retrieved successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProductFromDB(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A single product is retrieved succesfully',
    data: result,
  });
});

const updateSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.updateProductIntoDB(productId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Product is updated succesfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Product is deleted successfully',
    data: result,
  });
});

const sellProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const { nameOfTheBuyer, sellingQuantity, sellingDate, product } = req.body;

  const result = await ProductServices.saleProductFromDB(productId, {
    nameOfTheBuyer,
    sellingQuantity,
    sellingDate,
    product,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product sold successfully',
    data: result,
  });
});

const getAllSaleProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllSaleProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All sale products retrieved successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
  sellProduct,
  getAllSaleProducts,
};
