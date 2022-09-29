import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"removed",
    password:"removed",
    database:"blog"
})