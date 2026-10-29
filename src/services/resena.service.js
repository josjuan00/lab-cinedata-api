const Resena = require("../models/Resena.js");
require("../models/Usuario.js")
require("../models/Pelicula.js")

async function dePelicula(peliculaId) {
    return Resena.find({pelicula: peliculaId})
    .populate("usuario", "nombre")
    .populate("pelicula", "titulo")
    .sort({estrellas: -1});
}

async function crear(peliculaId, usuarioId, {texto, estrellas}) {
    const resena = await Resena.create({pelicula: peliculaId, usuario: usuarioId, texto: texto, estrellas: estrellas});
    return resena.populate(["usuario", "pelicula"]);
}

module.exports = { dePelicula, crear };