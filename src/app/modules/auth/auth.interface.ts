import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export type TLoginUser = {
  username: string;
  password: string;
};

export type TUserRequest = Request & {
  user?: JwtPayload & { role: string };
};

export type TJwtPayload =
  | JwtPayload
  | { _id?: string; email: string; role: 'user' }
  | undefined;
