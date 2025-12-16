# assignment3
# University Course Management System

## About the Project
In this project, I built a simple university course management system using JavaScript.  
The aim of the homework is not to build a real application, but to show that I understand important JavaScript concepts such as asynchronous callbacks, ES6 classes, object property descriptors, and array operations.

Student data is fetched asynchronously (simulated with setTimeout), then processed and analyzed in different files.

---

## File Structure
- **models.js**  
  Contains the Student class.  
  The student ID is defined as read-only using Object.defineProperty so it cannot be changed later.

- **database.js**  
  Simulates a slow database connection.  
  Student data is returned after a short delay using a callback function.

- **analytics.js**  
  Includes functions for calculating class averages, finding the best student, and filtering students based on conditions.

- **main.js**  
  This is the main file that runs the program.  
  It fetches the data, creates Student objects, tests immutability of IDs, and prints the results to the console.

  ## Challenges
The main difficulties I faced were:
- Understanding how callbacks work with asynchronous code
- Making sure the student ID cannot be modified
- Using array methods like map, filter, and reduce correctly
- Setting up Node.js and module imports properly
