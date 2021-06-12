import express from "express";
import "./database";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);
app.use(express.json());
app.use(routes);

export default app;