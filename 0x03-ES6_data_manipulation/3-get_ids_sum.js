export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, 0);
}
