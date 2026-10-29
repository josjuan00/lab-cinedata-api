function enviarJSON(res, status, datos){
    res.writeHead(status, {"Content-Type": "application /json; charset=uft-8"});
    res.end(JSON.stringify(datos));
}

module.exports = enviarJSON;