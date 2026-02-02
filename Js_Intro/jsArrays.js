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

//* The map() method - creates new array with the result of calling function for every array element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled)

//* map() in react - used to render list of elements
//* map() takes 3 parameters
//* currrentValue - The current element being processed
//* index - The index of current element
//* array - The array the map was called upon

const fruitList =['apple', 'banana', 'mango'];
function App(){
    return (
        <ul>
            {fruitList.map((fruit, index, array) => {

                return (
                    <li key={fruit}>
                        Number: {fruit}, {index}, Array: {array}
                    </li>
                );
            })}
        </ul>
    );
}

//* map() method - always return new array. It does not modify the original array

//* Destructuring - allows extracting values from objects or arrays into distinct variables. 
const vehicle = ['mutang', 'f-150', 'expedition'];
const [car, truck, vue] = vehicle;
document.getElementById('veh').innerHTML = truck; //* order of array is important when destructuring.

//* Destructuring objects
const person = {
    fName: 'Cici',
    lName: 'Nasra',
    age: 23,
}
    //* Destructuring
    let {fName, lName, age} = person;
    document.getElementById('person1').innerHTML = fName //* for objects, order of properties doesnot matter.

    //* Destructuring nested objects - reference the nested object then use curly braces to again destructure the items needed from the nested object. 
    
    const student = {
        fname: 'Cici',
        lname: 'Nasra',
        Age: 23,

        bus: {
            brand: 'ford',
            model: 'mustang',
        }
    }
    //* Destructuring
    let {fname, bus: {brand, model}} = student
    let message = `My name is ${fname} and I drive ${brand} ${model}.`
    document.getElementById('nested').innerHTML = message