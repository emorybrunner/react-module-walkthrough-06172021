//*SUPER
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    greet() {
        console.log(`Welcome back ${this.name}`);
    };

    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();


//lets create a new class called BronzeLevelUser
class BronzeLevelUser extends User {
    //we add the cc info property to the user here, so they can pay for their bronze level subscription
    constructor(username, password, ccinfo){
        //if you are going to use 'this' in a child constructor, you have to have a 'super' that points to the parent constructor
        super(username, password); 
        this.type = 'Bronze User';
        this.ccinfo = ccinfo
    };

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    };
};

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
