/*
Problem statement
You need to create a counter constructor function that initializes a count property to The counter should have two prototype methods:
• increment() increases the count by 1.
• decrement() decreases the count by 1.
Challenge
• Implementa constructor function counter that initializes count to e
• Attach increment() and decrement() methods tothe prototype.
*/

function Counter() {
  this.count = 0;
}
// Adding increment method to the prototype

Counter.prototype.increment = function () {
  this.count++;
};
// Adding decrement method to the prototype
Counter.prototype.decrement = function () {
  this.count--;
};
const myCounter = new Counter();
myCounter.increment();
console.log(myCounter.count); // Output: 1
myCounter.decrement();
console.log(myCounter.count); // Output:
