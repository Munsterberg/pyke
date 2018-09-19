import express from "express";
import passport from "passport";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user router");
});

userRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

userRouter.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.json({ redirectUrl: "/success" });
  }
);

userRouter.get("/auth/current_user", (req: any, res) => {
  if (!req.user) {
    res.send("no user");
  }

  res.send(req.user);
});

userRouter.get("/auth/logout", (req: any, res) => {
  req.logout();
  res.redirect("/");
});
