import express from "express";
import usuariosRouter from "./routes/usuarios.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use(cors());
app.use("/api", usuariosRouter);

export default app;
