import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
require("dotenv").config();
import "reflect-metadata";
require("./auth/passport");

import { router } from "./api/router";

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [process.env.COOKIE_SECRET]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
