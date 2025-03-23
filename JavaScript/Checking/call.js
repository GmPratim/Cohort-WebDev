const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const anotherPerson = { name: "Bob" };

person.greet.call(anotherPerson);
// person.greet(anotherPerson);

// Output: Hello, my name is Bob
