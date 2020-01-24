let i = 0;
let timeoutID = 0;
let currentTime = 0;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const restart = document.getElementById('restart');
const displayTime = document.getElementById('currentTime');

start.addEventListener('click', () => {
    if(timeoutID !== 0) {
        return false;
    }
    timeoutID = setInterval(function () {
        document.getElementById('stopWatch').textContent = i;
        i++;
        
      }, 1000)
});

pause.addEventListener('click', () => {
    clearTimeout(timeoutID);
    timeoutID = 0;
});

restart.addEventListener('click', () =>{
    i = 0;
    document.getElementById('stopWatch').textContent = 0;
})

function showCurrentTime () {
    currentTime = Date(Date.now()).toString().split(' ').slice(4, 5);
    displayTime.textContent = 'The current time is: '+currentTime;
}

setInterval(showCurrentTime, 1000);