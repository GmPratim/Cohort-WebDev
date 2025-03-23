// let fruits = ["apple", "cherry", "banana"]

const person = {
  name: "Alice",
  age: 25,
  toString() {
    return `Person{name='${this.name}', age=${this.age}}`;
  },
};

console.log(person.toString()); // Output: Person{name='Alice', age=25}
console.log(typeof person.toString());
