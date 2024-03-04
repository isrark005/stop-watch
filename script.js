const playPauseBtn = document.querySelector('#play-pause')
const resetBtn = document.querySelector('#reset')

//variable for timer
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;


//variables to put zero when the number is in unit

let milisecondZero = 0;
let secondZero = 0;
let minuteZero = 0;
let hourZero = 0;


//variables for controlling the fuctionality of stopwatch

let intervalStatus;
let intervalSwitch = "stopped";

function stopWatch() {

    milisecond++

   if (milisecond / 100 === 1) { 
    milisecond = 0;
    second++
    if(second / 60 === 1){
        second = 0;
        minute++;
        if(minute / 60 === 1){
            minute = 0;
            hour++
        }
    }
}

    if(milisecond < 10) {
        milisecondZero = "0" + milisecond.toString();
    }else {
        milisecondZero = milisecond;
    }
    if(second < 10) {
        secondZero = "0" + second.toString();
    }else {
        secondZero = second;
    }
    if(minute < 10) {
        minuteZero = "0" + minute.toString();
    }else {
        minuteZero = minute;
    }
    if(hour < 10) {
        hourZero = "0" + hour.toString();
    }else {
        hourZero = hour;
    }

    let displayTimer = document.getElementById('timer').innerText = hourZero + ":" + minuteZero + ":" + secondZero + ":" + milisecondZero;
}

// window.setInterval(stopWatch, 1000);

playPauseBtn.addEventListener('click', function(){
    if(intervalSwitch === "stopped"){
        intervalStatus = window.setInterval(stopWatch, 10);
        playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        intervalSwitch = "Started";
    }else{
        window.clearInterval(intervalStatus);
        playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        intervalSwitch = "stopped";
    }
})

resetBtn.addEventListener('click', function() {

    window.clearInterval(intervalStatus);
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById('timer').innerText = "00:00:00:00"
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    intervalSwitch = "stopped";
})

