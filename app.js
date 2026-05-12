import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// routers

app.use("/api/v1/users", userRouter);

export default app;
