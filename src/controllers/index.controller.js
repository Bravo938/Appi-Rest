import {pool} from '../db.js';

//controladores de las consultas de index.routers

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Poog" AS result')
    res.json(result[0])
}