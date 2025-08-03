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
console.log(p2.getFullname());

