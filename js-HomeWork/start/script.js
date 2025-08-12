

function updateTime (){
    const timeEvent = document.getElementById("time")
    const dateEvent = document.getElementById("date")

    const now = new Date()
    const hours = now.getHours() % 12 || 12
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds= now.getSeconds().toString().padStart(2, "0")
    const ampm = now.getHours() >= 12 ? "PM" : "AM"

    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

    timeEvent.textContent = `${hours}:${minutes}:${seconds}:${ampm}`
    dateEvent.textContent = now.toLocaleDateString(undefined, options);

}

setInterval(updateTime,1000)

updateTime()