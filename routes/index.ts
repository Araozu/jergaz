import express from "express";
import { Entrada } from "../models/Entrada";

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {

    const entradas = await Entrada.findAll();

    console.log("Todas las entradas:");
    console.log(JSON.stringify(entradas, null, 2));

    res.render('index', {
        title: "Jergaz.com",
        estaAutenticado: req.isAuthenticated()
    });
});

export default router;
