const obj1 = {
  fName: "Pratim",
  lName: "Ghosh",
  getFullname: function () {
    if (this.lname) return `${this.fName} ${this.lName}`;
  },
};

const obj2 = {
  fName: "P",
  lName: "G",
  getFullname: function () {
    if (this.lname) return `${this.fName} ${this.lName}`;
  },
};

// DRY - Do not repeate yourself.
// we r repeting in obj2 same prototypes function, but we have better approach

console.log(obj1.getFullname());
console.log(obj2.getFullname());

// better approach
// class object

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Pratim", "Ghosh");
const p2 = new Person("P", "G");

console.log(p1.getFullname());
console.log(p2.getFullname());
