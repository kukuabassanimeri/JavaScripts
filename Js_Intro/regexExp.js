document.getElementById("phoneNum").
addEventListener("input", (event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");

    const phone = input.value;
    const found = regex.test(phone); //* test searches a string for a pattern, and returns true or false, depending on the result

    if(!found && phone.length){
        input.classList.add("invalid");
        format.classList.add("block");
    }
    else{
        input.classList.remove("invalid");
        format.classList.remove("block");
    }
})
document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    
    console.log(savedPhoneNum);
})