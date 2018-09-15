import { getRepository } from "typeorm";

import { User } from "../entity/User";

export default async (req, res, next) => {
  const userRepository = getRepository(User);

  try {
    const user = await userRepository.findOne({ googleId: req.user.googleId });
    if (!user) {
      res.json({ redirectUrl: "/login" });
    }

    next();
  } catch (err) {
    res.json({ redirectUrl: "/login" });
  }
};
