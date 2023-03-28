export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((obj) => obj.location === city) // Filter by city
    .map((student) => {
      /** The resulting dictionary, go through each student
         * and return a new dictionary for each */
      const grade = newGrades.find((grade) => student.id === grade.studentId);
      if (grade) {
        return { ...student, grade: grade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
