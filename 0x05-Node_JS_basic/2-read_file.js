const fs = require('fs');

function countStudents(file_path) {
  try {
    const data = fs.readFileSync(file_path, 'utf8');
    rows = data.split('\n');
    filtered_rows = [] // to make sure no empty line is counted.
    for (row of rows) {
      if (row !== '') {
        filtered_rows.push(row.split(","));
      }
    }
    // check students count, excludes the first row
    studentsNum = filtered_rows.length - 1;

    // initialise special arrays for cs and swe
    csArray = [];
    sweArray = [];
    for (list of filtered_rows) {
      for (obj of list) {
        if (obj == 'CS') {
          csArray.push(list);
        } else if (obj == 'SWE') {
          sweArray.push(list);
        }
      }
    }

    csStudentsNum = csArray.length;
    sweStudentsNum = sweArray.length;

    // get first names of individuals for each field.
    csFirstNames = []
    sweFirstNames = []
    for (individual of csArray) {
      csFirstNames.push(individual[0]);
    }

    for (individual of sweArray) {
      sweFirstNames.push(individual[0]);
    }

    console.log(`Number of students: ${studentsNum}`);
    console.log(`Number of students in CS: ${csStudentsNum}. List: ${csFirstNames.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsNum}. List: ${sweFirstNames.join(', ')}`);
  } catch (error) {
    console.error("Cannot load the database");
  }
}
module.exports = countStudents;
