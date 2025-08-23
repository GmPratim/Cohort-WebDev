const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const ComplementaryContainer = document.getElementById(
  "ComplementaryContainer"
);
const saveColorButton = document.getElementById("saveColorButton");
const favoritesContainer = document.getElementById("favoritesContainer");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  updateColorDisplay(selectedColor);
  showComplementoryColor(selectedColor);
});

function updateColorDisplay(color) {
  colorCode.textContent = color;
  colorCode.style.color = color;
}

function showComplementoryColor(color) {
  const complimentColors = getComplementoryColor(color);
  ComplementaryContainer.innerHTML = "";

  complimentColors.forEach((compColor) => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = compColor;
    ComplementaryContainer.appendChild(colorBox);
  });
}

function getComplementoryColor(color) {
  const base = parseInt(color.slice(1), 16);
  const compliment = (0xffffff ^ base).toString(16).padStart(6, "0");
  return [`#${compliment}`];
}

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => alert("color code copied"))
    .catch((err) => console.log("failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
  const color = colorCode.textContent;
  addFavColor(color);
});

function addFavColor(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorBox.title = color;
  favoritesContainer.appendChild(colorBox);
}
