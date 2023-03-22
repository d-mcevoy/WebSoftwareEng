


export default function SaveGrade(req, res) {

    console.log("SAVE GRADE API PAGE");

    const cid = req.body.cid;
    const sid = req.body.sid;
    const grade = req.body.grade;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "INSERT INTO `wse_ca1`.`grades` (`studentid`, `courseid`, `grade`) VALUES ('"+sid+"', '"+cid+"', '"+grade+"');",
        function(err, results, fields) {
        
        }
      );

}