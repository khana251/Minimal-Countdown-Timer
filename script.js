const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = `1 Jan ${new Date().getFullYear() + 1}`;

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const diffTime = Math.abs(newYearsDate - currentDate);

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60)) % 24;
    const diffMinutes = Math.floor(diffTime / (1000 * 60)) % 60;
    const diffSeconds = Math.floor(diffTime / (1000)) % 60;
    
    daysEl.innerHTML = formatTime(diffDays);
    hoursEl.innerHTML = formatTime(diffHours);
    minutesEl.innerHTML = formatTime(diffMinutes);
    secondsEl.innerHTML = formatTime(diffSeconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
