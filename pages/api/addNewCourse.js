



export default function enrollNew(req, res) {

    console.log("ADD NEW COURSE API PAGE");

    const title = req.body.title;
    const desc = req.body.desc;
    const nfq = req.body.nfq;
    const courseyear = req.body.courseyear;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "INSERT INTO `wse_ca1`.`courses` (`title`, `desc`, `nfq`, `courseyear`) VALUES ('"+title+"', '"+desc+"', '"+nfq+"', '"+courseyear+"');",
        function(err, results, fields) {
            
            res.status(200).json('ok');
        }
      );

}