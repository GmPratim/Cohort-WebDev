// craete an object representing a type of tea with properties for name, type and caffeine content

const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
};

// Access and print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Add  a new property origin to the tea object

teas.origin = "Assam";

// Change the caffeine level of the tea object to "Medium".

teas.caffine = "Medium";

// Remove the type property from the tea object

delete teas.type;

// check if the tea object has a property origin

console.log("origin" in teas);

// Use a for ..in loop to print all properties of the tea object

for (let key in teas) {
  console.log(key + ": " + teas[key]);
}

// create a nestaed object represnting diffrent types of teas and their propertioes.

const myTeas = {
  greenTeas: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Tea",
  },
};

// Craete a copy of the tea object.

const teaCopy = {
  ...teas,
};

// Add a custom method describe to the tea object that returns a description string.

// Merge two objects representing diffrent teas into one
