import app from "./app.js";
import "./config.js";

import { DB_PORT , DB_DATABASE , DB_HOST ,DB_USER , DB_PASSWORD,DB_PORTDATABASE } from "./config.js";

console.log(DB_PORT, DB_PORTDATABASE, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

app.listen(DB_PORT, () => console.log("Server running on port " + DB_PORT));
