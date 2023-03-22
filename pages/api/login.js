

export default function handler(req, res) {

    console.log("LOGIN API");

    const username = req.body.username;
    const pass = req.body.password;

    console.log("username is: "+ username);
    console.log("password  is: "+ pass);

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "SELECT * FROM adminlogin WHERE username = '"+username+"' AND pass = '"+pass+"' LIMIT 1;",
        function(err, results, fields) {

            if(results.length == 1) {

                res.status(200).json("ok");

            } else {
                res.status(200).json("fail");
            }
              
         
        }
      );

}