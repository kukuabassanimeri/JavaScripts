//* Class - blueprint for creating objects

class Animal {
    constructor(name, species) { //* constructor keyword must be used
        this.name = name;
        this.species = species;
    }

    //* Method to introduce the animal
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.species}`);
    }
}

//* Create an instance of the Animal class
let lion = new Animal("Lion", "Panthera leo"); //*Use new to create an instance
lion.introduce();

let tiger = new Animal("Tiger", "Panthera tigris");
tiger.introduce();

//* Class inheritance - child class inherit properties from parent class

class Lion extends Animal {
    constructor(name, species, kingdom) {
        super(name, species); //* super keyword point to what you are inheriting from parent class
        this.kingdom = kingdom;
    }
    //* Method to introduce the lion
    introduceLion() {
        super.introduce();
        console.log(`I am a lion from the ${this.kingdom} kingdom`);
    }
}

//* create instance of lion
let simba = new Lion("Simba", "Lion", "Animalia");
simba.introduceLion();

class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greetAbass(){
        console.log(`Hello, my name is ${this.name} and I am in my ${this.age}s`);
    }
}

//* create instance of person Abass
let abass = new Person("Abass", 20, "Male");
abass.greetAbass();

//* Method overriding - same method in both parent and child classes
//* parent class
class Human { 
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    greetPerson() {
        console.log(`Hello ${this.name}.`);
    }
}
//* inheriting parent class
class Student extends Human {
    constructor(name) {
        //* call the super class constructor and pass in the name parameter
        super(name);
        //* Overriding an occupation property
        this.occupation = 'Student';
    }
    //* overriding Person's method
    greetPerson() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}
let stud = new Student('Jack');
stud.greetPerson();

//* Getter and setter - accessors properties.
//* Getter - access properties of an object
const employee = {
    fName: "Jack",

    //* Access property using getter
    get fullName() {
        return `${this.fName} Maa`;
    },
};

console.log(employee.fName);
console.log(employee.fullName); //* access value as property not method

//* Setter - modify properties of an object
const Chef = {
    fName: "Bob",
    //* Modify property using setter
    set chefName(newName) {
        this.fName = newName;
    }, 
};
console.log(Chef.fName);
//* Setter - modify properties of an object
Chef.chefName = "Jill";
console.log(Chef.fName);

//* class expressions - provides an alternative way to define a new class
const AnimalClass = class {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.species}`);
    }
};
let lionClass = new AnimalClass("Lion", "Panthera leo");
lionClass.introduce();

//* JAVASCRIPT STATIC METHODS -  defined on the class itself not the instance of the class
class Employee {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static greet(){
        console.log(`Hello, I am a person`);
    }
}
let person1 = new Employee("John");
console.log(person1.getName()); //* Accessing instance method
Employee.greet(); //* Accessing instance

//* To call a static method from the class constructor or an instance method - use className.staticMethodName or use this.constructor.staticMethodName

class MathHelper {
    //* Static method
    static add(a, b) {
        return a + b;
    }
}
//* Calling the static method without creating an instance of the class
console.log(MathHelper.add(5, 10));

//* STATIC PROPERTIES - It is shared by all instances of the class. SYNTAX - static propertyName
//* Accessing static properties - use className.staticPropertyName
//* Accessing static properties in static methods - use className.staticPropertyName
class Item {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.constructor.count++;
    }
    static count = 0; //* Static property
    static getCount() { //* Static method
      return Item.count;
    }
  }
  let pen = new Item('Pen', 5);
  let notebook = new Item('notebook', 10);
  
  console.log(Item.getCount());

  //* Private fields - prefix the fields name with #
  class Circle { 
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }
  let circle = new Circle(5);
  console.log(circle.area); //* Accessing private field using getter method

  //* Private methods - prefix the methods name with #
  //* Private methods - can only be called inside a class, but not outside the class or in subclasses.
  //* Calling private methods - use this.#privateMethod() or className.#privateMethod()

  //* Private instance methods example
  class Security {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  let person = new Security('John', 'Doe');
  console.log(person.getFullName());

  //* JAVASCRIPT INSTANCEOF - returns true if a prototype appears in the prototype chain of an object SYNTAX - object instanceof constructor
  function Customer(name) {
    this.name = name;
  }
  let p1 = new Customer('John');
  console.log(p1 instanceof Customer);

  //* Symbol.hasInstance - use to check the relationship
  class Workers{
    constructor(name, position){
      this.name = name;
      this.position = position;
    }
  }
  let worker1 = new Workers('John', 'Developer');
  console.log(Workers[Symbol.hasInstance](worker1));

  //* class
  class User{
    constructor(email, name){
        this._id = email;
        this._name = name;
    }
    greeting(){
        return `Hi, my name is ${this._name}`;
    }
  }

  export default User;