let i = 1;
let timeoutID = 0;
let currentTime = 0;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
const displayTime = document.getElementById('currentTime');
const stopWatch = document.getElementById('stopWatch');
stopWatch.textContent = '00:00:00';

start.addEventListener('click', () => {
    if(timeoutID !== 0) {
        return false;
    }
    timeoutID = setInterval(function () {
        let time = new Date();
        time.setHours(0,0,i);
        const runningTime = time.toTimeString().split(' ').slice(0, 1);
        stopWatch.textContent = runningTime;
        i++;
      }, 1000)
}, stopWatch);

pause.addEventListener('click', () => {
    clearTimeout(timeoutID);
    timeoutID = 0;
});

restart.addEventListener('click', () =>{
    i = 0;
    stopWatch.textContent = '00:00:00';
}, stopWatch);

setInterval(function showCurrentTime() {
    currentTime = Date(Date.now()).toString().split(' ').slice(4, 5);
    displayTime.textContent = 'The current time is: '+currentTime;
}, 1000, displayTime);