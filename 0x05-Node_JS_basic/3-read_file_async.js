const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const rows = data.split('\n');
        const filteredRows = []; // to make sure no empty line is counted.
        for (const row of rows) {
          if (row !== '') {
            filteredRows.push(row.split(','));
          }
        }
        // check students count, excludes the first row
        const studentsNum = filteredRows.length - 1;

        // initialise special arrays for cs and swe
        const csArray = [];
        const sweArray = [];
        for (const list of filteredRows) {
          for (const obj of list) {
            if (obj === 'CS') {
              csArray.push(list);
            } else if (obj === 'SWE') {
              sweArray.push(list);
            }
          }
        }

        const csStudentsNum = csArray.length;
        const sweStudentsNum = sweArray.length;

        // get first names of individuals for each field.
        const csFirstNames = [];
        const sweFirstNames = [];
        for (const individual of csArray) {
          csFirstNames.push(individual[0]);
        }

        for (const individual of sweArray) {
          sweFirstNames.push(individual[0]);
        }

        console.log(`Number of students: ${studentsNum}`);
        console.log(`Number of students in CS: ${csStudentsNum}. List: ${csFirstNames.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudentsNum}. List: ${sweFirstNames.join(', ')}`);
      }
      resolve(data);
    });
  });
}
module.exports = countStudents;
