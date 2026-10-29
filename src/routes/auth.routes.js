const {Router} = require("express");

const autenticar = require("../middlewares/autenticar");
const auth= require("../controller/auth.controller")
const router = Router();

//AQUI COMENTAR SWAGGER 

router.post ("/registro", auth.registro);
router.post ("/login", auth.login);
router.get("/perfil", autenticar, auth.perfil);

module.exports = router