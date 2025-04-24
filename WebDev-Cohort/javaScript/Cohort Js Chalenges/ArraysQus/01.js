/*
You are organizing a party and have a list of invited guests. But just
before the party starts, a new friend decides to join. You need to add
them to the guest list.

Problem Statement: Create a function that adds a new guest list and
returns the updated list.
*/

// You just need to implement the addGuest function
function addGuest(guestList, newGuest) {
  // Add the newGuest to guestList and return the updated list
  let result = guestList.concat(newGuest);
  return result;
}
let updatedGuestList = addGuest(["P", "R", "A", "T", "I"], ["M"]);
console.log(updatedGuestList);
