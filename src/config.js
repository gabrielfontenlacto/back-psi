import { config } from "dotenv";

config();

export const DB_PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.HOST || "localhost";
export const DB_DATABASE = process.env.DATABASE || "psi";
export const DB_PORTDATABASE = process.env.PORTDATABASE || 3306;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.PASSWORD || "root1234";
