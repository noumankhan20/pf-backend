import dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./prisma/schema.prisma",
  migrate: {
    datasource: {
      provider: "postgresql",
      url: process.env.DATABASE_URL
    }
  }
};
