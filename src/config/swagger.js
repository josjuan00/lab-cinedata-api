const path  = require("node:path");
const swaggerJsdoc = require("swagger-jsdoc");

const opciones = { 
    definition: {
        openapi: "3.0.3",
        info: { 
            tittle: "CineData Api",
            version: "1.0.0",
            descripcion: "API de CineData",   
        },
        servers: [{url: "http://localhost:3000"}],
        tags: [
            {name: "Peliculas", description : "Catálogo de peliculas"},
            {name: "Usuarios", description: "Usuarios que escriben peliculas"}
        ],
        components: {
            parameters: {
                id: {
                    name: "id",
                    in: "path",
                    require: true,
                    description: "objectId de MongoDB (24 caracteres hexadecimales)",
                    schema: {type: "string", example: "6adb...."}
                }
            },
            schemas: { 
                PeliculasResumen: {
                    type: "object",
                    properties: {
                        id: {type: "string", example: "6adb..."},
                        titulo: {type: "string", example: "Coco"},
                        anio: {type: "integer", example: 2017},
                        nota: {type: "numbre", example: 8.6}
                    }
                },
                Pelicula: {
                    type: "object",
                    properties: {
                        id: {type: "string", example: "6adb..."},
                        titulo: {type: "string", example: "Coco"},
                        anio: {type: "integer", example: 2017},
                        nota: {type: "numbre", example: 8.6},
                        generos: {type: "array", items: {type: "string"}, example: ["animacion"]},
                        director: {type: "string", example: "Lee Unkrich"},
                        duracion: {type: "integer", example: "105"},
                        disponible: {type: "boolean", example: "true"}    
                    }
                },
                Error: {
                    type: "object",
                    propierties: {
                        error: {type: "string", example: "Dano no validp"},
                        detalles: {type: "strings", items: {type: "string"}, example: ["Titulo obligatorio", "Nota máxima 5"]}
                    }
                }
            }
        } 
    },
    apis: [path.join(__dirname, "../routes/*.js")]
};

module.exports = swaggerJsdoc(opciones);