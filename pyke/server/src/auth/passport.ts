import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "/api/user/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const userRepository = getRepository(User);

      const existingUser = await userRepository.findOne({
        googleId: profile.id
      });

      if (!existingUser) {
        const user = new User();
        user.googleId = profile.id;
        const newUser = await userRepository.save(user);
        done(null, newUser);
      }

      done(null, existingUser);
    }
  )
);
