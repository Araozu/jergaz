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
        failureRedirect: "/error"
    }),
    (req, res) => {
        console.log("Redirigiendo tras autenticar...")
        console.log(req.isAuthenticated());
        res.redirect("/")
    }
);

// @route GET /auth/logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

export default router;
