import { config } from "dotenv";

config();

export const {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DATABASE,
  DB_PORTDATABASE,
} = process.env;
