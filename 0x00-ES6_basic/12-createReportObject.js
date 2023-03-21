<<<<<<< HEAD
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const listOfDepts = Object.keys(employeesList);
      return listOfDepts.length;
    },

  };
}
=======
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
>>>>>>> 6882ec3407c4b1b848358386d600b72751b373f8
