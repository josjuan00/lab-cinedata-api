const mongoose = require("mongoose");
const Pelicula = require("../models/Pelicula.js");
const { ReturnDocument } = require("mongodb");

function construirFiltro({genero, anioDesde, notaMin, disponible}) {
    const filtro = {};
    if(genero) filtro.generos = genero;
    if(anioDesde) filtro.anio = {$gte: anioDesde};
    if (notaMin) filtro.notaMin = {$gte: notaMin};
    if (disponible !== undefined) filtro.disponible = disponible === "true";
    return filtro;
}

async function listar(filtros, orden, pagina, limite) {
    /* const filtro = genero ? { generos : genero } : {};
    const docs = await coleccion().find(filtro).sort({nota : -1, titulo: 1}).toArray();
    return docs.map(doc => new Pelicula(doc));
} */
    const filtro = construirFiltro(filtros);
    const [peliculas, total] = await Promise.all([
        Pelicula.find(filtro).sort(orden).skip((pagina - 1) * limite),
        Pelicula.countDocuments(filtro) 
    ]);
    return { peliculas, total };
}
async function mejores(n = 3) {
  /*   const docs = await coleccion().find().sort({nota : -1, titulo : 1}).limit(n).toArray();
    return docs.map(doc => new Pelicula(doc));
} */
    return Pelicula.find().sort({ nota: -1, titulo: 1}).limit(n);
}
async function buscarPorId(id) {
/*     const doc = await coleccion().findOne({_id: new ObjectId(id)});
    return doc ? new Pelicula(doc) : null; 
}*/
    return Pelicula.findById(id);
}

//CREATE
async function crear(datos) {
    return Pelicula.create(datos);
}

//UPDATE
async function actualizar(id, datos) {
    return Pelicula.findByIdAndUpdate(id, datos, { ReturnDocument: "after", runValidators: true});
}

//DELETE
async function eliminar(id) {
    return Pelicula.findByIdAndDelete(id);
}
//FUNCIONES AUXILIARES

function esIdValido(id){
    return mongoose.isValidObjectId(id);
}

module.exports = {listar, mejores, buscarPorId, esIdValido, crear, actualizar, eliminar};
