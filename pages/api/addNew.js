



export default function enrollNew(req, res) {

    console.log("ENROLL STUDENT API PAGE");

    const sid = req.body.sid;
    const firstname = req.body.fname;
    const surname = req.body.sname;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
    const enrolledin = req.body.enrolledin;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "INSERT INTO `wse_ca1`.`students` (`id`, `firstname`, `lastname`, `email`, `address`, `telephone`, `enrolledin`) VALUES ('"+sid+"', '"+firstname+"', '"+surname+"', '"+email+"', '"+address+"', '"+phone+"', '"+enrolledin+"');",
        function(err, results, fields) {
            
            res.status(200).json('ok');
        }
      );

}