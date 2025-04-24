function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor == "white") {
    changeBackground("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeBackgroundColor("white");

    themeButton.innerText = "Dark Mode";
  }
});
