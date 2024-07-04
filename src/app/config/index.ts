import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_EXPIRES_IN_REFRESH: process.env.JWT_EXPIRES_IN_REFRESH,
  SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD,
};
