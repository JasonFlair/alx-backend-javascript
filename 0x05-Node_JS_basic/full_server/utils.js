const fs = require('fs');

module.exports = function readDatabase(filePath) {
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

        // get first names of individuals for each field.
        const csFirstNames = [];
        const sweFirstNames = [];
        for (const individual of csArray) {
          csFirstNames.push(individual[0]);
        }

        for (const individual of sweArray) {
          sweFirstNames.push(individual[0]);
        }
        const studentsPerMajor = {
          CS: csFirstNames,
          SWE: sweFirstNames,
        };
        resolve(studentsPerMajor);
      }
    });
  });
};
