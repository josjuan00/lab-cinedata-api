const { Router } = require(`express`);
const { listar, top, obtener, crear, actualizar, eliminar, crearResenas } = require("../controller/pelicula.controller");
const validarId = require("../middlewares/validarId");
const autenticar = require("../middlewares/autenticar");
const autorizar = require("../middlewares/autorizar");

const router = Router();

/**
 * @openapi
 * /peliculas:
 *   get:
 *     tags: [Películas]
 *     summary: Lista las películas ordenadas por nota
 *     parameters:
 *       - name: genero
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           example: Drama
 *     responses:
 *       200:
 *         description: Lista de películas en resumen
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PeliculasResumen'
 */
router.get("/", listar);

router.get(`/peliculas`, listar);
router.get(`/peliculas/top`, top);
router.get(`/peliculas/resenas/:id`,  validarId);
router.post(`/peliculas/resenas/:id`, autenticar, validarId, crearResenas);

router.post("/", autenticar, autorizar("admin"), crear);
router.put("/:id", autenticar, autorizar("admin", "usuario"), validarId, actualizar);
router.delete("/:id", autenticar, autorizar("admin"), validarId, eliminar);

module.exports = router;
