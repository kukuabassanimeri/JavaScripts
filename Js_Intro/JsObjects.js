//* JAVASCRIPT OBJECTS - store multiple data in key-value pairs. 
//* SYNTAX - const objectName = { key1: value1, key2: value2, ..., keyN: valueN };

const student = { //* student is an object
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"]
}
console.log(student);
//*  key-value pairs of an object are its properties. 

//* Access object properties
//* Using dot notation
 console.log(student.name); //* use objectName.propertyName
 console.log(student.age); 

 //* Using square brackets notation
 console.log(student["grade"]); //* use objectName[propertyName]
 console.log(student["subjects"]); 

//* Modify object properties - by assigning a new value to an existing key
 student.grade = "B"; //* Use objectName.propertyName = newValue
 console.log(student.grade);

 //* Add object property
 student.address = "123 Main St"; //* Use objectName[propertyName] = newValue
 console.log(student.address);

 //* Remove object property
 delete student.subjects; //* Use delete objectName.propertyName
 console.log(student.subjects); //* undefined now
 console.log(student); //* subjects property removed from student object

//* Object methods - include function inside an object
 const person = {
    name: "John Doe",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name); //* Access object's property using this.propertyName
    }
}
person.greet(); //* Call the method using objectName.methodName()

//* Constructor function - function is used to create and initialize objects.
 function Student(name, age, grade) { //* constructor function must start with uppercase
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.greet = function() { //* add method to constructor function
        console.log("Hello, my name is " + this.name);
    }
}
let student1 = new Student("Abass", 20, "A"); //* create an object using new keyword
 student1.greet(); //* Call the method using new object.methodName()

 //* JavaScript prototype - allow properties and methods to be shared among instances of the function or object
 function Car() {
    console.log("Car instance created!");
};
//* add a property to prototype
Car.prototype.color = "Red";

//* add a method to the prototype
Car.prototype.drive = function () {
    console.log(`Driving the car painted in ${this.color}`);
};

//* display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

//* call the added method
Car.prototype.drive();