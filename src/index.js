import app from './app.js';
import {PORT} from './config.js';

//se ejecuta en el puerto asignado en la variable de entorno PORT
app.listen(PORT);
console.log("Servidor Escuchando en el puerto " + PORT);

