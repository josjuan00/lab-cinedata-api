const saludar = require("./saludar");
const { formatearDuracion, formatoNota} = require("./formato");
const formato = require("./formato");

console.log(saludar("Ana"));
console.log(formatearDuracion(169), formato.formatoNota(7.56));
