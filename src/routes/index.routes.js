import {Router} from 'express';
import {pool} from '../db.js';
import {ping} from '../controllers/index.controller.js';

const rutas = Router()

//pruebo con una consulta a la db, la consulta lo guarda ping 
rutas.get('/ping', ping);

rutas.get('/p', async (req, res) => {
    const [result] = await pool.query('SELECT * FROM empleados;')
    res.json(result)
});

export default rutas;