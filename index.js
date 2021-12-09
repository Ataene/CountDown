
const timeCounter = document.getElementById("timeCounter");

    // Countdown Timer!
    let CountUpdate = setInterval(function(){
    
    let countDownDate = new Date("Dec 21, 2022 12:20:30").getTime();

    let todayTime = new Date().getTime();
    let endTime = countDownDate - todayTime;

    let totalDays = Math.floor(endTime / (1000 * 60 * 60 * 24));
    let totalHours = Math.floor(endTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let totalMinutes = Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));
    let totalSeconds = Math.floor(endTime % (1000 * 60) / 1000);

    timeCounter.innerText = totalDays + "d " + totalHours + "h " + totalMinutes + "m " + totalSeconds + "s ";

    if( endTime < 0 ){
        clearInterval.timeCounter.innerText = "Expired";
    }

    // timeCounter.style.visibility = (timeCounter.style.visibility == "hidden" ? "" : "hidden");

}, 1000);


 let blinkSeconds = setInterval( () => {
    totalSeconds.style.visibility = (totalSeconds.style.visibility == "hidden" ? "" : "hidden");
}, 1000);