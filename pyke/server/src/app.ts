import express from "express";

import { router } from "./api/router";

const app = express();

app.use("/api", router);

export default app;
