//* Declare Variables
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 65){
        clearInterval();
    }
    else{
        counter++;
        number.innerText = counter + "%";
    }
}, 30); //* move at 30 milliseconds