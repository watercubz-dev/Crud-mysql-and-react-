import {createPool} from 'mysql2/promise'

//exportamos la const poll y con createpool hacemos la conexion a mysql2 atra vez de  los siguientes comando
export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootuser22h',
    database: 'msqlcrud'
})
