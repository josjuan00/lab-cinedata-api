const { esIdValido } = require("../services/pelicula.service")

function validarId(req, res, next){
    if (!esIdValido(req.params.id)) {
        return res.status(400).json({ error: "Error, la ID no coincide con ninguna de la BBDD" })
    }
    next()        
}

module.exports = validarId