export default function getStudentsByLocation(students, city) {
  const result = students.filter((obj) => obj.location === city);
  return result;
}
