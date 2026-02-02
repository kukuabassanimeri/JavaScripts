const results = JSON.parse(localStorage.getItem("studentResults")) || [];
  const tbody = document.getElementById("resultsBody");

  if (results.length) {
    results.forEach((student, index) => {
      const row = `<tr>
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.total}</td>
        <td>${student.grade}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  } else {
    document.body.innerHTML = "<h2 style='color:red; text-align:center;'>No student data found.</h2>";
  }