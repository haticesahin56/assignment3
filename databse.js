export function fetchStudents(callback) {
  console.log("Fetching data from database...");

  setTimeout(() => {
    const rawData = [
      {
        id: 22040801,
        name: "Emin",
        courses: [
          { courseId: 301, grade: 90 },
          { courseId: 302, grade: 55 }
        ]
      },
      {
        id: 22040802,
        name: "Sumeyye",
        courses: [
          { courseId: 301, grade: 70 },
          { courseId: 302, grade: 95 }
        ]
      },
      {
        id: 22040803,
        name: "Yagmur",
        courses: [
          { courseId: 301, grade: 60 },
          { courseId: 302, grade: 55 }
        ]
      }
    ];

    console.log("Data received!");
    callback(rawData);
  }, 2000);
}
