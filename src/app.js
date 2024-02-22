import express from 'express';
import empleadosRoutes from './routes/empleados.routes.js';
import indexRouter from './routes/index.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';


//creo servidor 
const app = express();

//configuro para que me devuelva un json
app.use(express.json());



app.use(indexRouter);// uso rutas de index
app.use('/api',empleadosRoutes);//uso las rutas de empleados
app.use('/api', usuariosRoutes);

//not foound
app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Esta ruta no existe'
    })
})

export default app;