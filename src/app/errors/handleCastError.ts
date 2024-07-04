import mongoose from 'mongoose'
import { TErrorSource, TGenericErrorResponse } from './../interface/error'

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSource: TErrorSource = [
    {
      path: err.path,
      message: err.message,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Invalid Id with Cast Error',
    errorSource,
  }
}

export default handleCastError
