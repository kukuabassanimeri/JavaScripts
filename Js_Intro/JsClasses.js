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
let lion = new Animal("Lion", "Panthera leo");
lion.introduce();

let tiger = new Animal("Tiger", "Panthera tigris");
tiger.introduce();

//* Class inheritance - allows code reusability

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
