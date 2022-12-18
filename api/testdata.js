import { createConnection } from 'mysql';


function connection() {
  const con = createConnection({
    host:"localhost",
    user:"notroot",
    password:"ilovevillagepeople!",
    database:"blog"
})
  return con;
}

//TEST CONNECTION
connection().connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL-server");

// ADD DUMMY DB AND MAKE SURE CREATE WORKS
/*     const userTable = `CREATE TABLE if not exists userstest
                    (id INT, PRIMARY KEY (id), username VARCHAR(45), email VARCHAR(255), password VARCHAR(255), img VARCHAR(1000))`;
    const postTable = `CREATE TABLE if not exists poststest
                    (id INT, PRIMARY KEY (id), title VARCHAR(255), description VARCHAR(5000), img VARCHAR (1000), date datetime, cat VARCHAR(45))`;

                    connection().query(userTable, (err) => {
                        if (err) throw err;
                      });
                      connection().query(postTable, (err) => {
                        if (err) throw err;
                      });

    var sql = "INSERT INTO userstest (id, username, email, password) VALUES ('1001', 'TEST', 'TEST', 'TEST')";
    connection().query(sql, function (err) {
        if (err) throw err;
        console.log("1 record inserted");
      }); */
    



    connection().end();
});
export default connection;