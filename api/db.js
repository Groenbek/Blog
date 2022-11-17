import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "notroot",
  password: "xxxx",
  database: "xxxx",
});
