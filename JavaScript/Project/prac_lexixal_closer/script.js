// document.getElementById("createButton").addEventListener("click", function () {
//   const selectedColor = document.getElementById("selectColor").value;

//   if (!selectedColor) {
//     alert("Please select a color first!");
//     return;
//   }

//   // Create a new button

//   const newBtn = document.createElement("button");
//   newBtn.textContent = selectedColor.toUpperCase();

//   // Closure: function remembers `selectedColor`
//   newBtn.addEventListener("click", function () {
//     document.body.style.backgroundColor = selectedColor;
//   });

//   document.body.appendChild(newBtn);
// });

// -----------------------------------------------------

// const createBtn = document.getElementById("createButton");
// const selectColor = document.getElementById("selectColor");

// let currentButton = null; // keep track of the last created button

// createBtn.addEventListener("click", function () {
//   const selectedColor = selectColor.value;

//   if (!selectedColor) {
//     alert("Please select a color first!");
//     return;
//   }

//   // Remove previous button if it exists
//   if (currentButton) {
//     currentButton.remove();
//   }

//   // Create a new button
//   const newBtn = document.createElement("button");
//   newBtn.textContent = selectedColor.toUpperCase();

//   // Closure: newBtn remembers this selectedColor
//   newBtn.addEventListener("click", function () {
//     document.body.style.backgroundColor = selectedColor;
//   });

//   // Append and update currentButton reference
//   document.body.appendChild(newBtn);
//   currentButton = newBtn;
// });

const createBtn = document.getElementById("createButton");
const selectColor = document.getElementById("selectColor");
let remvBtn = null;

createBtn.addEventListener("click", function () {
  const selectedColor = selectColor.value;
  const newButton = document.createElement("button");
  if (!selectedColor) {
    alert("Please select a color first!");
    return;
  }

  if (remvBtn) {
    remvBtn.remove();
  }
  newButton.textContent = selectedColor.toUpperCase();
  newButton.addEventListener("click", function () {
    document.body.style.backgroundColor = selectedColor;
  });

  document.body.appendChild(newButton);
  remvBtn = newButton;
});
