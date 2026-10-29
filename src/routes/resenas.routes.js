const { Router } = require("express");
const listarResenas = require("../controller/resena.controller");

const resenasRouter = Router();

resenasRouter.get("", listarResenas)

module.exports = resenasRouter;