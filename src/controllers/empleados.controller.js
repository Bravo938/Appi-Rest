import {pool} from '../db.js';

// controladores, lugo los exporto a las rutas
//de esta manera el codigo se ve mas limpio 

//consulto toda la tabla de empleados
export const getEmpleados = async (req, res)=>{ 
    
    try {
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            menssage: 'Algo sale mal en getEmpleados '
        })
    }
}

//consulta para un id 
export const getEmpleadosid = async (req, res) => {
    
   try {
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id= ?', [req.params.id])

    if(rows.length <= 0) return res.status(404).json({
     menssage: 'Employe not found'
    })
     
    res.json(rows[0])

   } catch (error) {
    
    return res.status(500).json({
        menssage: 'Algo salio mal en getEmpleadosid'
    })
   }
}

//crear empleado
export const postEmpleados = async (req, res)=>{ 
    try {
        const {nombre, sueldo} = req.body;
    const [rows] = await pool.query('INSERT INTO empleados (nombre, sueldo) VALUES (?, ?)', [nombre, sueldo])
    res.send({
        id: rows.insertId,
        nombre,
        sueldo,
    })
    } catch (error) {
        return res.status(500).json({
            menssage: 'Algo salio mal en postEmpleados'
        })
    }
   
    
};

export const deleteEmpleados = async (req, res)=>{ 
   try {
    const [result] = await pool.query('DELETE FROM empleados WHERE id= ?', [req.params.id])
    //filas afectadas es igual o menor a 0 quiere decir que no elimino nada
if (result.affectedRows <= 0) return res.status(404).json({
    message : 'No se Elimino'
})
    //en caso que si se modifique alguna fila me mostrata 204
res.sendStatus(204)

   } catch (error) {
    return res.status(500).json({
        menssage: 'Algo salio mal en deleteEmpleados'
    })
   }
};

//actualizar un empleado 
export const putEmpleados = async (req, res)=>{ 
    try {
        const {id} = req.params//adquiero este parametro id
    const {nombre, sueldo} = req.body //adquiere del cuerpo nombre y sueldo

    //IFNULL hace que si no tengo un valor nuevo asignado se quede con el anterior de esta manera puedo actualizar individualmente
    const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), sueldo = IFNULL(?, sueldo) WHERE id = ?', [nombre, sueldo, id])

    console.log(result)

    //si el sesultado de la afectacion en la fila es 0 entonces no actualizo 
    if (result.affectedRows === 0) return res.status(404).json({
        menssage: 'No se actualizo empleado'
    })

    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            menssage:'Algo salio mal en EMPLEADOS'
        })
    }
};