const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    readDatabase(process.argv[2]).then((studentsPerMajor) => {
      const csStudents = studentsPerMajor.CS;
      const sweStudents = studentsPerMajor.SWE;
      const csStudentCount = csStudents.length;
      const sweStudentCount = sweStudents.length;

      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${csStudentCount}. List: ${csStudents.join(', ')}\n`);
      response.write(`Number of students in SWE: ${sweStudentCount}. List: ${sweStudents.join(', ')}`);
      response.end();
    });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    readDatabase(process.argv[2]).then((studentsPerMajor) => {
      const csStudents = studentsPerMajor.CS;
      const sweStudents = studentsPerMajor.SWE;
      const csStudentCount = csStudents.length;
      const sweStudentCount = sweStudents.length;

      if (request.params.major === 'CS') {
        response.send(`Number of students in CS: ${csStudentCount}. List: ${csStudents.join(', ')}\n`);
      } else if (request.params.major === 'SWE') {
        response.send(`Number of students in SWE: ${sweStudentCount}. List: ${sweStudents.join(', ')}`);
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    });
  }
}
module.exports = StudentsController;
