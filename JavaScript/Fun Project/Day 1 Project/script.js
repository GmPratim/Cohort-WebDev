function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  //   console.log(minutes, second, ampm);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = now.toLocaleDateString(undefined, options);

  timeElement.textContent = `${hours}:${minutes}:${second} ${ampm}`;

  dateElement.textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
