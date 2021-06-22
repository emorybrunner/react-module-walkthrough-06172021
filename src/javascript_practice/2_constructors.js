//*CONSTRUCTORS
class User {
    constructor(first, last, e) { //values that are passed in as arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        //left: the actual keys of the object being created -- storing the incoming arguments from the new instance as the value for 'this' specific object
    };
};

let userOne = new User('Paul', `O'Connor`, 'poconnor@elevenfifty.org');
console.log(userOne.first); //undefined -- because this property doesnt exist!
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User { f: 'Paul', l: 'O'Connor', email: 'poconnor@elevenfifty.org' }