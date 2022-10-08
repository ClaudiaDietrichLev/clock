let now = new Date();
const digital = document.querySelector(".digital-clock")
if (digital === null){
    console.error("digital ist nicht gesetzt")
};

const analogClock = document.querySelector(".analog-clock");
const analogClockCSS = document.querySelector(".analog-clock-css");

setAnalogClockCSS (now);

function updateAnalogClock () {
    let hour = now.getHours();
    if (hour > 12){
        hour = hour - 12;
    }
    const hourAngle = (360 / 12) * hour;
    analogClock.style.setProperty("--hour", hourAngle);
    
    let second = now.getSeconds();
    const secondAngle = (360 / 60) * second;
    analogClock.style.setProperty("--second", secondAngle);
    
    let minute = now.getMinutes();
    const minuteAngle = (360 / 60) * minute;
    analogClock.style.setProperty("--minute", minuteAngle);
}

function writeTime() {
    now = new Date();
    digital.innerText = now.toLocaleTimeString();
    updateAnalogClock();
}

setInterval(writeTime, 1000);

function setAnalogClockCSS (now) {
    let hour = now.getHours();
    if (hour > 12){
        hour = hour - 12;
    }
    const hourAngle = (360 / 12) * hour;
    analogClockCSS.style.setProperty("--hour-css", hourAngle);
    
    let second = now.getSeconds();
    const secondAngle = (360 / 60) * second;
    analogClockCSS.style.setProperty("--second-css", secondAngle);
    
    let minute = now.getMinutes();
    const minuteAngle = (360 / 60) * minute;
    analogClockCSS.style.setProperty("--minute-css", minuteAngle);
}
