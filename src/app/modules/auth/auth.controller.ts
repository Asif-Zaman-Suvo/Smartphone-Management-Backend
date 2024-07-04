import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';

const registerUserController = catchAsync(async (req, res) => {
  const result = await AuthServices.registerUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User registered successfully',
    data: result,
  });
});
const loginUserController = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successful',
    data: result,
  });
});

export const AuthControllers = {
  registerUserController,
  loginUserController,
};
