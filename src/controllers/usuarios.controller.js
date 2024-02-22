import {pool} from '../db.js';

// controladores, lugo los exporto a las rutas
//de esta manera el codigo se ve mas limpio 

//consulto toda la tabla de empleados
export const getUsuarios = async (req, res)=>{ 
    
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios')
        res.json(rows)
        //console.log(rows)
    } catch (error) {
        return res.status(500).json({
            menssage: 'Algo sale mal en getEmpleados '
        })
    }
}

//consulta para un id 
export const getUsuariosid = async (req, res) => {
    
   try {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario= ?', [req.params.id])

    console.log(rows)
    if(rows.length <= 0) return res.status(404).json({
     menssage: 'Employe not found'
    })
     
    res.json(rows[0])//le pido que muestre loq ue tiene en la posicion 0 solo para que muestre solo un valor 

   } catch (error) {
    
    return res.status(500).json({
        menssage: 'Algo salio mal en getEmpleadosid'
    })
   }
}

//crear Usuario
export const postUsuarios = async (req, res)=>{ 
    try {
        const {nombre_usuario, passward} = req.body;//adquiero atraves del cuerpo 
    const [rows] = await pool.query('INSERT INTO usuarios (nombre_usuario, passward) VALUES (?, ?)', [nombre_usuario, passward])
    res.send({
        id: rows.insertId,
        nombre_usuario,
        passward,
    })
    console.log(rows);
    } catch (error) {
        return res.status(500).json({
            menssage: 'Algo salio mal en postEmpleados'
        })
    }
   
    
};

//eliminar usuario
export const deleteUsuarios = async (req, res)=>{ 
   try {
    const [result] = await pool.query('DELETE FROM usuarios WHERE id_usuario= ?', [req.params.id])
    //filas afectadas es igual o menor a 0 quiere decir que no elimino nada
    //console.log(result), dentro de result llamo a affecterows que es filas afectadas y hago la condicion 
if (result.affectedRows <= 0) return res.status(404).json({
    message : 'No se Elimino'
})
    //en caso que si se modifique alguna fila me mostrata 204
res.sendStatus(204).json({
    menssage: 'Se Elimino correctamente'
})

   } catch (error) {
    return res.status(500).json({
        menssage: 'Algo salio mal en deleteEmpleados'
    })
   }
};

//actualizar usuario
export const putUsuarios = async (req, res)=>{ 
    try {
        const {id} = req.params//adquiero este parametro id
    const {nombre_usuario, passward} = req.body //adquiere del cuerpo nombre y el pasward

    //IFNULL hace que si no tengo un valor nuevo asignado se quede con el anterior de esta manera puedo actualizar individualmente
    const [result] = await pool.query('UPDATE usuarios SET nombre_usuario = IFNULL(?, nombre_usuario), passward = IFNULL(?, passward) WHERE id_usuario = ?', [nombre_usuario, passward, id])

    //console.log(result)
    

    //si el resultado de la afectacion en la fila es 0 entonces no actualizo 
    if (result.affectedRows === 0) return res.status(404).json({
        menssage: 'No se actualizo usuario'
    })

    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            menssage:'Algo salio mal en putUsuarios'
        })
    }
};