function attachEventsListeners() {
	const DISTANCE_TO_METERS = {
		km: 1000,
		m: 1,
		cm: 0.01,
		mm: 0.001,
		mi: 1609.34,
		yrd: 0.9144,
		ft: 0.3048,
		in: 0.0254
	}

	const SELECTORS = {
		CONVERT_BTN: 'convert',
		INPUT_FIELD: 'inputUnits',
		OUTPUT_FIELD: 'outputUnits',
		INPUT_DISTANCE: 'inputDistance',
		OUTPUT_DISTANCE: 'outputDistance'
	}

	const convertBtn = document.getElementById(SELECTORS.CONVERT_BTN);
	const inputUnitsElement = document.getElementById(SELECTORS.INPUT_FIELD);
	const outputUnitsElement = document.getElementById(SELECTORS.OUTPUT_FIELD);

	const convert = (distance, convertFrom, convertTo) => {
		const distanceToMeters = DISTANCE_TO_METERS[convertFrom] * distance;
		return distanceToMeters / DISTANCE_TO_METERS[convertTo];
	}

	const handleConvertion = () => {
		const inputDistance = document.getElementById(SELECTORS.INPUT_DISTANCE).value;
		const convertFrom = inputUnitsElement.options[inputUnitsElement.selectedIndex].value;
		const convertTo = outputUnitsElement.options[outputUnitsElement.selectedIndex].value;
		const convertedDistance = convert(inputDistance, convertFrom, convertTo);
		document.getElementById(SELECTORS.OUTPUT_DISTANCE).value = convertedDistance;
	}

	convertBtn.addEventListener('click', handleConvertion)
}
