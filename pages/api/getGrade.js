
export default function getGrades(req, res) {

    let sid = req.query.id;

    console.log("Get Grades DB Query:"+sid);

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 3307,
        database: 'wse_ca1'
      });

      connection.query(
        "SELECT grades.id as'gid' , students.id as 'sid' , students.firstname as 'fn' , students.lastname as 'sn' , grades.courseid as 'cid' , grades.grade as 'grade' FROM wse_ca1.grades INNER JOIN students on grades.studentid = students.id WHERE students.id = '"+sid+"';",
        function(err, results, fields) {

            console.log("Inside Get Grade API Query");
            console.log(results);
            res.status(200).json(results);
            console.log("After return Inside Grade API Query");
         
        }
      );

}