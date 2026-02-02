function enterMarks() {
  const students = [];
  const totalStudents = 2;

  for (let i = 0; i < totalStudents; i++) {
    try {
      let name = prompt(`Enter name for Student ${i + 1}:`);
      if (!name) throw "Name is required.";

      let a1 = parseFloat(prompt("Assignment 1 marks:"));
      let a2 = parseFloat(prompt("Assignment 2 marks:"));
      let a3 = parseFloat(prompt("Assignment 3 marks:"));
      let cat1 = parseFloat(prompt("CAT 1 marks:"));
      let cat2 = parseFloat(prompt("CAT 2 marks:"));
      let final = parseFloat(prompt("Final Exam marks:"));

      // Validate marks
      let marks = [a1, a2, a3, cat1, cat2, final];
      if (marks.some(m => isNaN(m) || m < 0 || m > 100)) {
        throw "Invalid input. Marks must be between 0 and 100.";
      }

      // Calculate total
      let total = a1 + a2 + a3 + cat1 + cat2 + final;

      // Assign grade
      let grade = "";
      if (total >= 80) grade = "A";
      else if (total >= 70) grade = "B";
      else if (total >= 60) grade = "C";
      else if (total >= 50) grade = "D";
      else grade = "F";

      students.push({ name, total, grade });

    } catch (err) {
      alert("Error for Student " + (i + 1) + ": " + err);
      i--; // Repeat the current student
    }
  }

  // Output results
  console.log("Student Results:");
  students.forEach(s => {
    console.log(`Name: ${s.name}, Total: ${s.total}, Grade: ${s.grade}`);
  });
}