/*
You've been tasked with designing the perfect shiny diamond rug cursh's room. They love stars, and you've decided to make a sparkling pattern
using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! +

Problem Statement:
Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond, with
the middle of the diamond having 2n - 1 stars.

Important Rules:

Each line must not have trailing spaces.
2 The output must not have an extra newline at the end.

For example:

. Forn = 4, the output will look like:

1

    *
   ***
  *****
 *******
  *****
   ***
    * 
 */

function shinyDiamondRug(n) {
  let diamond = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }
  return diamond;
}

let t = shinyDiamondRug(3);
console.log(t);

/*

function shinyDiamondRug(n) {
    let diamond = '';

    // Upper part of the diamond (including the middle line)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            diamond += ' '; // Space before the stars
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            diamond += '*'; // Stars on each line
        }
        diamond += '\n'; // Move to the next line after each row
    }

    // Lower part of the diamond (after the middle line)
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            diamond += ' '; // Space before the stars
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            diamond += '*'; // Stars on each line
        }
        diamond += '\n'; // Move to the next line after each row
    }

    return diamond;
}
*/
