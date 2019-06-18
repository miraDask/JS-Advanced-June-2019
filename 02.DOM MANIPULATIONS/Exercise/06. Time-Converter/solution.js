function attachEventsListeners() {
	const buttons = document.querySelectorAll('[type="button"]');
	const daysInput = document.getElementById('days');
	const hoursInput = document.getElementById('hours');
	const minutesInput = document.getElementById('minutes');
	const secondsInput = document.getElementById('seconds');

	const oneDay = {
		days: 1,
		hours: 24,
		minutes: 1440,
		seconds: 86400
	}

	const outputValues = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	const getDays = (value, conversionType) => {
		let days = 0;

		if (conversionType === 'days') {
			days = value;
		} else if (conversionType === 'hours') {
			days = value / oneDay.hours;
		} else if (conversionType === 'minutes') {
			days = value / oneDay.minutes;
		} else {
			days = value / oneDay.seconds;
		}

		return days;
	}

	const convertValues = (valueToConvert, conversionType) => {
		const days = getDays(valueToConvert, conversionType);

		outputValues.days = days;
		outputValues.hours = oneDay.hours * days;
		outputValues.minutes = oneDay.minutes * days;
		outputValues.seconds = oneDay.seconds * days;
	}

	const displayConvertedValues = () => {
		daysInput.value = outputValues.days;
		hoursInput.value = outputValues.hours;
		minutesInput.value = outputValues.minutes;
		secondsInput.value = outputValues.seconds;
	}

	const eventHandler = (e) => {
		const input = e.target.previousElementSibling;
		const conversionType = input.id;
		const valueToConvert = +input.value;
		convertValues(valueToConvert, conversionType);
		displayConvertedValues();
	}

	[...buttons].forEach(b => b.addEventListener('click', eventHandler));
}
