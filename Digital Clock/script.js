display = () => {

	const time = document.getElementById('time');
	const date = document.getElementById('date');
	const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const dateTime = new Date();
	dayName = dateTime.getDay();
	dayNumber = dateTime.getDate();
	month = dateTime.getMonth();
	year = dateTime.getFullYear();
	hours = dateTime.getHours();
	minutes = dateTime.getMinutes();
	seconds = dateTime.getSeconds();
	let midday = "AM";

	if (hours > 12) {
		midday = "PM";
	}
	if (dayNumber < 10) {
		dayNumber = '0' + dayNumber;
	}
	if (month < 10) {
		month = '0' + month;
	}
	if (hours < 10) {
		hours = '0' + hours;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	date.textContent = week[dayName] + ', ' + dayNumber + '.' + month + '.' + year;
	time.textContent = hours + ' : ' + minutes + ' : ' + seconds + ' ' + midday;
}

setInterval(display);

