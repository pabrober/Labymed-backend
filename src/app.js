import express from "express";
import cors from "cors";
import estudiantesRoutes from "./routes/Estudiantes.routes";
import cursosRoutes from "./routes/Cursos.routes";
import catedraticosRoutes from "./routes/Catedraticos.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/estudiantes", estudiantesRoutes);
//app.use("/api/cursos", cursosRoutes);
//app.use("/api/catedraticos", catedraticosRoutes);

export default app;