//*EXTENDS
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

//initial class uses default type of "Trial User" -- but what if we wanted a different type? and what if we wanted different methods for it? if we want to keep some similar properties between the classes, we can use extends.
//the child class "extends" from the parent class. a child class may also be known as a subclass.

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

//TrialUser is a child or subclass of User
//therefore, TrialUser has access to the name property, for example, but User as a whole doesn't have access to the trialEnding method.

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

