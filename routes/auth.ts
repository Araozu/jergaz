import express from "express";
import passport from "passport";

const router = express.Router();

// @route GET /auth/google
router.get('/google', passport.authenticate("google", {
    scope: "profile"
}));

// @route GET /auth/google/callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/"
    }),
    (req, res) => {
        res.redirect("/")
    }
);

export default router;
