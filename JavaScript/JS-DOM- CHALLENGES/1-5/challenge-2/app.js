/** 
const mainHeading = document.getElementById("mainHeading");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
const purpleButton = document.getElementById("purpleButton");
const resetButton = document.getElementById("resetButton");

redButton.addEventListener("click", () => {
  mainHeading.style.color = "#e74c3c";
});

greenButton.addEventListener("click", () => {
  mainHeading.style.color = "#2ecc71";
});

blueButton.addEventListener("click", () => {
  mainHeading.style.color = "#3498db";
});
purpleButton.addEventListener("click", () => {
  mainHeading.style.color = "#9b59b6";
});
resetButton.addEventListener("click", () => {
  mainHeading.style.color = "#34495e";
});

*/

const mainHeading = document.getElementById("mainHeading");

const colorMap = {
  redButton: "#e74c3c",
  greenButton: "#2ecc71",
  blueButton: "#3498db",
  purpleButton: "#9b59b6",
  resetButton: "#34495e",
};

for (let buttonId in colorMap) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    mainHeading.style.color = colorMap[buttonId];
  });
}
