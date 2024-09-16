let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let isRunning = false;

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
	if (!isRunning) {
		intervalId = setInterval(() => {
			seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
			if (minutes === 60) {
				hours++;
				minutes = 0;
			}
			updateTime();
		}, 1000);
		isRunning = true;
		startBtn.disabled = true;
		stopBtn.disabled = false;
	}
}

function stopStopwatch() {
	clearInterval(intervalId);
	isRunning = false;
	startBtn.disabled = false;
	stopBtn.disabled = true;
}

function resetStopwatch() {
	hours = 0;
	minutes = 0;
	seconds = 0;
	updateTime();
	stopStopwatch();
}

function updateTime() {
	hoursSpan.textContent = padZero(hours);
	minutesSpan.textContent = padZero(minutes);
	secondsSpan.textContent = padZero(seconds);
}

function padZero(value) {
	return (value < 10 ? '0' : '') + value;
}

