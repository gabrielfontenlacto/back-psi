import app from "./app.js";
import "./config.js";

import { DB_PORT } from "./config.js";

app.listen(DB_PORT, "0.0.0.0" , () => console.log("Server running on port " + DB_PORT));
