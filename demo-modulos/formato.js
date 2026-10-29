function formatoNota(nota) {
    return nota.toFixed(1);
}

function formatearDuracion(nota) {
    const min = nota;
    return `${Math.floor(min / 60)}h ${min % 60} min`;
}

module.exports = {formatoNota, formatearDuracion}
