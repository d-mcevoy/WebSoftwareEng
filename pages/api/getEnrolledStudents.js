



export default function getEnrolledStudents(req, res) {

    console.log("Get Enrolled Student API page: ID = "+ req.query.id);


    let currentID = req.query.id;

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "SELECT * FROM wse_ca1.students WHERE enrolledin = '"+currentID+"';",
        function(err, results, fields) {

            
            // loop over all records     
            
            // return all the records
            res.status(200).json(results);
         
        }
      );

}