



export default function deleteCourse(req, res) {

    console.log(req.body)

    console.log("DELETE COURSE API PAGE: cid = "+ req.body.cid);


    const cid = req.body.cid;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "DELETE FROM `wse_ca1`.`courses` WHERE (`id` = '"+cid+"');",
        function(err, results, fields) {
            
            res.status(200).json('ok');
        }
      );

}