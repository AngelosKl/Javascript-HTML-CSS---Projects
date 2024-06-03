const displayDMY = document.getElementById("displayDMY");
const displayHMS = document.getElementById("displayHMS");
const stopWatch = document.getElementById("stopWatch");

function updateDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    displayDMY.value = `${day}/${month}/${year}`;
    displayHMS.value = `${hour}:${minutes}:${seconds}`;
}


setInterval(updateDateTime, 1000);
updateDateTime();

let swSeconds = 0;
let swMinutes = 0;
let swHours = 0;
let stopwatchInterval;

function updateStopwatch() {
    swSeconds++;
    if (swSeconds >= 60) {
        swSeconds = 0;
        swMinutes++;
        if (swMinutes >= 60) {
            swMinutes = 0;
            swHours++;
        }
    }
    stopWatch.value = `${swHours}:${swMinutes}:${swSeconds}`;
}

function start() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function stop() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function reset() {
    swSeconds = 0;
    swMinutes = 0;
    swHours = 0;
    stopWatch.value = `${swHours}:${swMinutes}:${swSeconds}`;
}
