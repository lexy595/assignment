//example of class variable
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    haveBirthday() {
        this.age += 1;
        return `Happy Birthday, ${this.name}! You are now ${this.age} years old.`;
    }
}

const person1 = new Person('Great', 16);
console.log(person1.greet());          
console.log(person1.haveBirthday());    
