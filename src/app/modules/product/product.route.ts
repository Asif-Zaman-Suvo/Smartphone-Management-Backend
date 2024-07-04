import express from 'express';
import {
  createProductValidationSchema,
  sellProductValidationSchema,
  updateProductValidationSchema,
} from './product.validator';
import { ProductControllers } from './product.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/add-new-product',
  auth(USER_ROLE.superAdmin, USER_ROLE.manager),
  validateRequest(createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get('/allProducts', ProductControllers.getAllProducts);
router.get('/allSaleProducts', ProductControllers.getAllSaleProducts);
router.get('/product/:productId', ProductControllers.getSingleProduct);

router.put(
  '/update/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.manager),
  validateRequest(updateProductValidationSchema),
  ProductControllers.updateSingleProduct,
);

router.delete(
  '/delete/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.manager),
  ProductControllers.deleteProduct,
);
// Add the route for selling a product
router.post(
  '/sell/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.seller),
  validateRequest(sellProductValidationSchema),
  ProductControllers.sellProduct,
);

export const ProductRoutes = router;
