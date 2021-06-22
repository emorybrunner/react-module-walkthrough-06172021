//*CLASSES
class User {
    constructor(name) { //constructor is a special method that helps initialize an object created from a class
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    status() {
        console.log(`Current status: ${this.type}`);
    };
};

//creating a class is like creating a template that use can use over and over again (cookie cutter example)

//Instance of the class/new object (a new cookie)
let anonDude = new User('Anonymous Dude'); //"new" is "constructing" a different/new version of the constructor

//we can now use the new instance and the . operator to access the two methods
anonDude.greet()
anonDude.status();

//another instance (a new cookie)
let anonLady = new User('Anonymous Lady');
anonLady.greet();
anonLady.status();

//a third instance (a new cookie)
let jeff = new User('Jeff');
jeff.greet();
jeff.status();