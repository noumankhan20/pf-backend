import dotenv from 'dotenv';

dotenv.config();

export const env= {
    PORT:process.env.PORT || 7000,
    DATABASE_URL: process.env.DATABASE_URL
}