

export default function listAllCoursesQuery(req, res) {

    console.log("List All Courses DB Query");

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "SELECT * FROM wse_ca1.courses;",
        function(err, results, fields) {

            
            // loop over all records     
            
            // return all the records
            res.status(200).json(results);
         
        }
      );

}