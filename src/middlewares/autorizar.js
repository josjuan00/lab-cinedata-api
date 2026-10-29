function autorizar(...rolesPermitidos){
    return(req, res, next) =>{
        if(!rolesPermitidos.includes(req.usuario.rol)){
            return res.status(403).json({error: "No tienes permiso para entar"});
        }
        next();
    }
}

module.exports = autorizar;