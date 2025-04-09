/*
You lost your phone in a list of items. Find the index of *Phones.
Problem Statement: Create a function that finds the index of •Phone• in the list
of items and returns the index.
*/

function findPhone(items) {
  // Return the index of "Phone" in the items array

  return items.indexOf("Phone");
}
console.log(findPhone(["wallet", "Keys", "Phone", "Glasses"]));
