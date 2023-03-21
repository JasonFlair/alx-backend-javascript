export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      const listOfDepts = Object.keys(employeesList);
      return listOfDepts.length;
    },
  };
}
