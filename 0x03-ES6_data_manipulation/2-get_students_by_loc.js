export default function getStudentsByLocation(students, location) {
  const result = students.filter((obj) => obj.location === location);
  return result;
}
