import {Router} from 'express';
import { getEmpleados, getEmpleadosid, postEmpleados, putEmpleados, deleteEmpleados} from '../controllers/empleados.controller.js';
//creo un enrutador

const rutas = Router();
//creo las rutas, las petisiones las exporto desde los controladores 

rutas.get('/empleados',  getEmpleados);

rutas.get('/empleados/:id',  getEmpleadosid);

rutas.post('/empleados', postEmpleados);

rutas.patch('/empleados/:id', putEmpleados);

rutas.delete('/empleados/:id', deleteEmpleados);

export default rutas;