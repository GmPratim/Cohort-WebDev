/*
Problem stateman
You need to create a constructor function Animal that takes a name parameter. Add a method makesound to its prototype, which always returns
"Some generic sound".
Challenge
• Implement a constructor function Animal that initializes the name property.
• Attach a method makesound to its prototype that returns •some generic soundl
 */

// Constructor function
function Animal(name) {
  this.name = name; // Store the name in the instance
}

// Attach method to the prototype
Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

// Example usage
const cat = new Animal("Cat");
console.log(cat.name); // Output: Cat
console.log(cat.makeSound()); // Output: Some generic sound
