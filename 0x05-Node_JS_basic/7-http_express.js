const express = require('express');
const fs = require('fs');
const app = express();
const port = 1245;
const filePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        rows = data.split('\n');
        filtered_rows = []; // to make sure no empty line is counted.
        for (row of rows) {
          if (row !== '') {
            filtered_rows.push(row.split(','));
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
        csFirstNames = [];
        sweFirstNames = [];
        for (individual of csArray) {
          csFirstNames.push(individual[0]);
        }

        for (individual of sweArray) {
          sweFirstNames.push(individual[0]);
        }

        res.write(`This is the list of our students\n`);
        res.write(`Number of students: ${studentsNum}\n`);
        res.write(`Number of students in CS: ${csStudentsNum}. List: ${csFirstNames.join(', ')}\n`);
        res.write(`Number of students in SWE: ${sweStudentsNum}. List: ${sweFirstNames.join(', ')}`);
        res.end();
        resolve(data);
      }
    });
  });
});

app.listen(port);
module.exports = app;
