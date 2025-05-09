//* Array - array is a special variable, which can hold more than one value
//* syntax const arrayName = [];
const myArray = []; //* const prevent reassigning arrays

//* add elements inside an array
myArray[0] = "Abass";
myArray[1] = "Kuku";
myArray[2] = "Cookie";

//* referring to an array
console.log(myArray);

//* length property - return length of an array
console.log(myArray.length);

//* last element in array
console.log(myArray[myArray.length - 1])

//* accessing arrays elements
const cars = [
    "Saab ",
    " Volvo",
    "BMW"
]
document.querySelector(".array-index").innerHTML = cars[1];

//* changing array element
cars[1] = "marcede Benz "
document.querySelector(".change-array").innerHTML = cars;

//* convert array to string
document.querySelector(".convert-array").innerHTML = cars.toString();

//* add array elements -push
function myFunction(){
    cars.push(" Audi");
    document.querySelector(".add-array").innerHTML = cars;
}