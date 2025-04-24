// crate an array containing different types of tea
const teas = ["Oolong Tea", "black tea", "green tea", "Herbal tea"];
console.log(teas);

// Add "chamomile tea" to the existing list of teas

teas.push("chamomile tea");

// Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("Oolong Tea");
if (index > -1) {
  teas.splice(index, 1);
}

// Filter the list to only include teas that are caffeinated.

let caffeinatedTeas = teas.filter((tea) => tea !== "Herbal tea");

// sort the list of teas in alphabetical order.
let shr = teas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(shr);

// use a for loop to print each type of tea in the array.

for (let i = 0; i < teas.length; i++) {
  //   console.log(teas[i]);
}

// use a for loo[ to count how many teas are cafffeinated (excluding "Herbal Tea")

let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal tea") {
    count++;
  }
}
console.log(count);

// use a for loop to create a new array with all tea names in uppercase.
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase);
}

// Use a for loop to find the name with the most characters.

let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// use a for loop to reverse the order of teas in the array.

const reversedArray = [];

for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
let ad = 6;
console.log(ad);
