const startButton = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const CountdownDisplay = document.getElementById("CountdownDisplay");
const mainCon = document.getElementById("mainCon");

let valueSec;
let timerId;
let puseBtn, resuBtn;

function startTimer() {
  valueSec = parseInt(timeInput.value);

  if (isNaN(valueSec)) {
    CountdownDisplay.innerText = "Enetr a number in second";
    return;
  }
  if (valueSec <= 0) {
    CountdownDisplay.innerText = "Enetr a number > 0";
    return;
  }
  // Start countdown
  timerId = setInterval(updateCountdown, 1000);

  // puse btn
  if (!puseBtn) {
    puseBtn = document.createElement("button");
    puseBtn.innerText = "Pause";
    mainCon.appendChild(puseBtn);

    puseBtn.addEventListener("click", () => {
      clearInterval(timerId);
    });
  }

  // resume btn
  if (!resuBtn) {
    resuBtn = document.createElement("button");
    resuBtn.innerText = "Resume";
    mainCon.appendChild(resuBtn);

    resuBtn.addEventListener("click", () => {
      setInterval(function () {
        valueSec--;
        CountdownDisplay.innerText = `Time remaining: ${valueSec} seconds`;
        if (valueSec <= 0) {
          clearInterval(resuBtn);
          CountdownDisplay.innerText = "Time up⌚";
        }
      }, 1000);
    });
  }

  function updateCountdown() {
    valueSec--;
    CountdownDisplay.innerText = `Time remaining: ${valueSec} seconds`;
    //

    if (valueSec <= 0) {
      clearInterval(timerId);
      CountdownDisplay.innerText = "Time up⌚";
    }
  }
}

startButton.addEventListener("click", startTimer);
