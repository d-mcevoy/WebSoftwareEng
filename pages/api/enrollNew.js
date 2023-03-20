



export default function enrollNew(req, res) {

    console.log('Enroll Student API page');
    console.log("Inserting into Students DB");
    console.log(req.body);

    const sid = req.body.sid;
    const firstname = req.body.fname;
    const surname = req.body.sname;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
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
        "INSERT INTO `wse_ca1`.`students` (`id`, `firstname`, `lastname`, `email`, `address`, `telephone`, `enrolledin`) VALUES ('"+sid+"', '"+firstname+"', '"+surname+"', '"+email+"', '"+address+"', '"+phone+"', '"+cid+"');",
        function(err, results, fields) {
            
            res.status(200).json('ok');
        }
      );

}