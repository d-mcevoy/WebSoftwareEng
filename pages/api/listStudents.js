

export default function listAllCoursesQuery(req, res) {

    console.log("LIST ALL STUDENTS QUERY API");

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "SELECT * FROM wse_ca1.students;",
        function(err, results, fields) {

            
            // loop over all records     
            
            // return all the records
            res.status(200).json(results);
         
        }
      );

}