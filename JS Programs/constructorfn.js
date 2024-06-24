//constuctor fn
function person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob= new Date(dob);
    //with constructor fn
    // this.birthyear=  function(){
    //     return this.dob.getFullYear();
    // };
    // this.fullname = function(){
    //     return `${this.firstname} ${this.lastname}`
    // }
}

// with prototype
person.prototype.birthyear = function(){
    return this.dob.getFullYear();
}
person.prototype.fullname = function() {
    return `${this.firstname} ${this.lastname}`;
}

//with class

class person {
    constructor(){}
}

//instantiate obj
const person1 = new person ('harsh', 'bihade', '1996-04-29');
const person2 = new person ('leo', 'caprio', '1998-09-28');

console.log(person1.birthyear());
console.log(person2.fullname());