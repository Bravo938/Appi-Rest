import {Router} from 'express';
import { getUsuarios ,getUsuariosid, postUsuarios, putUsuarios, deleteUsuarios} from '../controllers/usuarios.controller.js';
//creo un enrutador

const rutas = Router();
//creo las rutas, las petisiones las exporto desde los controladores 

rutas.get('/usuarios',  getUsuarios);

rutas.get('/usuarios/:id',  getUsuariosid);

rutas.post('/usuarios', postUsuarios);

rutas.patch('/usuarios/:id', putUsuarios);

rutas.delete('/usuarios/:id', deleteUsuarios);

export default rutas;