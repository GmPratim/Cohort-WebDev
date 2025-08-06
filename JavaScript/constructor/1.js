class Person {
    constructor (fname, lname) {
        this.name = fname;
        this.name2 = lname;
    }
    getFullname() {
        return ` ${this.name} ${this.name2}`
    }

    
}
const p1 = new Person ('p', 'g')
const p2 = new Person ('let', 'see')

// console.log(p1.fname, p1.lname);
// console.log(p2.getFullname());

const a = {
    Person: "p"

}
// console.log(a.Person);
// console.log(a.age);

let animal = {
  eats: true
};

let rabbit = Object.create(animal);
rabbit.hops = true;

// console.log(rabbit.eats); 


let arr = [1, 2, 3];
console.log(arr.toString());

// from Array.prototype
console.log(arr.__proto__ === Array.prototype); // true
