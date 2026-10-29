function logger(req, res, next){
    console.log("Estas pasando por el middleware");
    
    const inicioCuenta = Date.now();

    res.on("finish",()=>{
        const tiempo = Date.now() - inicioCuenta;
        console.log(`${req.method}: ${req.originalUrl} => ${res.statusCode} ${tiempo}ms`)
    })

    next();
}

module.exports = logger