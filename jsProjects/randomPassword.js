//* Declare variables
const passwordBox = document.getElementById("password");
const length = 12; //* password should be 12 characters

//* different characters needed in password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//* function to generate random password
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password; //* display password in the input box

}
 //* copy password function
 function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

    //* show password copied timeout message
    const msg = document.createElement("span");
    
    //* condition to check if no password is generated
    if(passwordBox.value == ""){
        msg.textContent = "Please generate a password!";
        msg.classList.add("password-copied");
        msg.style.color = "orange";
    }
    else{
        msg.textContent = "Password copied to clipboard!";
        msg.classList.add("password-copied");
        msg.style.color = "red";
    }
    document.body.appendChild(msg);
    
        //* set timeout
        setTimeout(() => {
            msg.remove();
        }, 2000);

}
