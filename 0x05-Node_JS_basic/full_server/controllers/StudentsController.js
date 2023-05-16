const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((studentsPerMajor) => {
      const csStudents = studentsPerMajor.CS;
      const sweStudents = studentsPerMajor.SWE;
      const csStudentCount = csStudents.length;
      const sweStudentCount = sweStudents.length;

      response.write('This is the list of our students\n');
      response.write(`Number of students in CS: ${csStudentCount}. List: ${csStudents.join(', ')}\n`);
      response.end(`Number of students in SWE: ${sweStudentCount}. List: ${sweStudents.join(', ')}`);
    });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(process.argv[2]).then((studentsPerMajor) => {
      const csStudents = studentsPerMajor.CS;
      const sweStudents = studentsPerMajor.SWE;

      if (request.params.major === 'CS') {
        response.status(200).send(`List: ${csStudents.join(', ')}\n`);
      } else if (request.params.major === 'SWE') {
        response.status(200).send(`List: ${sweStudents.join(', ')}`);
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
module.exports = StudentsController;
