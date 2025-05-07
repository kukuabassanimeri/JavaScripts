//* Declare variables
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

//* function to validate name
function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) { //* meaning input field is empty
    nameError.innerHTML = "Name is required!";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //* check the validity of name
  return true;
}

//* Function to validate phone number
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) { //* condition to check the phone No.
    phoneError.innerHTML = "Phone no is required!";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) { //* phone No. should be 0-9, and 10 digits
    phoneError.innerHTML = "Only digits please!";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
  return true;
}

//* Function to validate email
function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email Invalid!"; //* if email not matching
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //* if email matched
  return true;
}

//* Function to validate message
function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length; //* gives how much characters is left
  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //*check sign
  return true;
}

//* Function to validate form
function validateForm() {
  if ( //* check all the added functions
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block"; //* inner css styling
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000); //* disappear after 3 seconds
    return false;
  }
}
