import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    console.log("Usuario");
    console.log(req.isAuthenticated());
    console.log(req.user);

    res.render('index', {
        title: "Jergaz.com"
    });
});

export default router;
