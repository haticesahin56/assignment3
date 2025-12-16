export function calculateClassAverage(students, courseId) {
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(Boolean)
    .map(c => c.grade);

  const sum = grades.reduce((acc, g) => acc + g, 0);
  return sum / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((best, current) =>
    current.getAverage() > best.getAverage() ? current : best
  );
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
