// Function methods

// .call() function

// In JavaScript, .call() is a method that allows you to invoke a function with a specified this value and arguments. It is mainly used to borrow methods from one object and use them for another.

const person1 = {
  name: "Rahul",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person2 = { name: "Amit" };

// Using call() to borrow greet() method
person1.greet.call(person2); // Output: Hello, my name is Amit
