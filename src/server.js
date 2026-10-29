require("dotenv").config({quiet: true});
const express = require("express");
const peliculasRouter = require("./routes/peliculas.routes");
const authRoutes = require("./routes/auth.routes")
const { conectar } = require("./config/config");
const noEncontrada = require("./middlewares/noEncontrada");
const manejarErrores = require("./middlewares/manejarErrores");
const logger = require("./middlewares/logger");
const swaggerUi = require("swagger-ui-express");
const swaggerspec = require("./config/swagger");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const origenesPermitidos = process.env.CORS_ORIGIN.split(",");
app.use(cors({cors:origenesPermitidos}));

app.use(express.json());
app.use(logger);


app.use(``, peliculasRouter);
//app.use(`/resenas`, resenasRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerspec));
app.get("/api-docs.json", (req, res) => res.json(swaggerspec));
app.use("/auth", authRoutes)
app.use(noEncontrada);



async function arrancar() {
    await conectar();

    app.listen(PORT,()=>{
        console.log(`Conectadeishon and correndeishon to http://localhost:${PORT}`);
    })
}

arrancar().catch(error => {
    console.error(error.message);
    process.exit(1);
});
