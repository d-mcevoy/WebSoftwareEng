

export default function SaveGrade(req, res) {

    console.log("Delete Grade API page");

    const gid = req.body.gid;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "DELETE FROM `wse_ca1`.`grades` WHERE (`id` = '"+gid+"');",
        function(err, results, fields) {
            
            res.status(200).json("ok");
        }
      );

}