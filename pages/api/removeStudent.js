

export default function DeleteGrade(req, res) {

    console.log("Delete Student API page");

    const sid = req.body.sid;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "DELETE FROM `wse_ca1`.`students` WHERE (`id` = '"+sid+"');",
        function(err, results, fields) {
            
            res.status(200).json("ok");
        }
      );

}