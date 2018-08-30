import express from "express";
import "reflect-metadata";

import { router } from "./api/router";

const app = express();

app.use("/api", router);

export default app;
