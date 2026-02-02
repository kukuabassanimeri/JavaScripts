 //* Toggle Button
 document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const span = button.previousElementSibling;
      const isHidden = span.style.display === 'none' || span.style.display === '';

      span.style.display = isHidden ? 'inline' : 'none';
      button.textContent = isHidden ? 'Read less' : 'Read more';
    });
  });

   const emailInput = document.getElementById("email");
  const form = document.getElementById("subscribe-form");
  const errorMsg = document.getElementById("email-error");

  //* Email Subscription
  emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      errorMsg.textContent = "Please enter a valid email address.";
    } else {
      errorMsg.textContent = "";
    }
  });

  form.addEventListener("submit", (e) => {
    const email = emailInput.value;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!valid) {
      e.preventDefault();
      errorMsg.textContent = "Email is invalid. Please correct it.";
    } else {
      alert("Subscribed successfully!");
    }
  });