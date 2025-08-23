const body = document.getElementById("body");
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const status = document.getElementById("status");

toggleButton.addEventListener("click", () => {
  // bulb.classList.toggle("off");
  // document.body.classList.toggle("dark-mode");
  if (bulb.classList.contains("off")) {
    bulb.classList.remove("off"); // Turn ON bulb
    body.classList.add("dark-mode"); // Dark mode background
    toggleButton.textContent = "Turn Off";
    status.textContent = "Status: On";
  } else {
    bulb.classList.add("off"); // Turn OFF bulb
    body.classList.remove("dark-mode"); // Back to light mode
    toggleButton.textContent = "Turn On";
    status.textContent = "Status: Off";
  }
});
