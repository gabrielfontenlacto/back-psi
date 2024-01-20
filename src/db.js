import { createPool } from "mysql2/promise";

import { DB_HOST } from "./config.js";
import { DB_USER } from "./config.js";
import { DB_PASSWORD } from "./config.js";
import { DB_PORTDATABASE } from "./config.js";
import { DB_DATABASE } from "./config.js";
import { DB_PORT } from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORTDATABASE,
  database: DB_DATABASE,
});
