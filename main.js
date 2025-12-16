import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import { calculateClassAverage, findTopStudent, filterStudents } from "./analytics.js";

fetchStudents((rawData) => {
  const students = rawData.map(s => new Student(s.id, s.name, s.courses));

  console.log("\nTesting Immutability:");
  console.log("Original ID:", students[0].id);
  console.log("Attempting to change ID to 220408999...");
  students[0].id = 220408999; 
  console.log("Final ID:", students[0].id, "(Success: ID did not change)");

  console.log("\n--- Analytics Report ---");

  const avg101 = calculateClassAverage(students, 101);
  console.log("Class Average for Course 101:", avg101.toFixed(2));

  const top = findTopStudent(students);
  console.log("Top Student:", top.name, "(Average:", top.getAverage().toFixed(1) + ")");

  const in102 = filterStudents(students, s =>
    s.courses.some(c => c.courseId === 102)
  );

  console.log("Students in Course 102:", in102.map(s => s.name).join(", "));
});
