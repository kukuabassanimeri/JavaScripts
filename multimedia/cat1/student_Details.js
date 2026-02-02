let currentIndex = 0;
const totalStudents = 20;
let students = [];

const nextButton = document.getElementById("nextBtn");
const fieldIds = ["name", "a1", "a2", "a3", "cat1", "cat2", "final"];

//* Enable Next button only when all fields are filled correctly
fieldIds.forEach(id => {
  document.getElementById(id).addEventListener("input", validateForm);
});

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const a1 = parseFloat(document.getElementById("a1").value);
  const a2 = parseFloat(document.getElementById("a2").value);
  const a3 = parseFloat(document.getElementById("a3").value);
  const cat1 = parseFloat(document.getElementById("cat1").value);
  const cat2 = parseFloat(document.getElementById("cat2").value);
  const final = parseFloat(document.getElementById("final").value);

  const allValid =
    name &&
    !isNaN(a1) && a1 >= 0 && a1 <= 100 &&
    !isNaN(a2) && a2 >= 0 && a2 <= 100 &&
    !isNaN(a3) && a3 >= 0 && a3 <= 100 &&
    !isNaN(cat1) && cat1 >= 0 && cat1 <= 100 &&
    !isNaN(cat2) && cat2 >= 0 && cat2 <= 100 &&
    !isNaN(final) && final >= 0 && final <= 100;

  nextButton.disabled = !allValid;
}

function nextStudent() {
  const name = document.getElementById("name").value.trim();
  const a1 = parseFloat(document.getElementById("a1").value);
  const a2 = parseFloat(document.getElementById("a2").value);
  const a3 = parseFloat(document.getElementById("a3").value);
  const cat1 = parseFloat(document.getElementById("cat1").value);
  const cat2 = parseFloat(document.getElementById("cat2").value);
  const final = parseFloat(document.getElementById("final").value);

  students.push({ name, a1, a2, a3, cat1, cat2, final });
  currentIndex++;

  if (currentIndex < totalStudents) {
    clearFields();
    document.getElementById("status").innerText = `Student ${currentIndex + 1}`;
  } else {
    document.getElementById("status").innerText = "All students entered.";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("computeBtn").style.display = "inline";
    document.getElementById("studentForm").scrollIntoView({ behavior: "smooth" });
  }
}

function clearFields() {
  fieldIds.forEach(id => {
    document.getElementById(id).value = '';
  });
  nextButton.disabled = true;
}

function calculateGrade(total) {
  if (total >= 70) return 'A';
  else if (total >= 60) return 'B';
  else if (total >= 50) return 'C';
  else if (total >= 40) return 'D';
  else return 'F';
}

function computeGrades() {
  const results = students.map(student => {
    const total = student.a1 + student.a2 + student.a3 + student.cat1 + student.cat2 + student.final;
    const grade = calculateGrade(total);
    return { name: student.name, total, grade };
  });

  localStorage.setItem("studentResults", JSON.stringify(results));
  window.location.href = "Student_Results.html";
}
