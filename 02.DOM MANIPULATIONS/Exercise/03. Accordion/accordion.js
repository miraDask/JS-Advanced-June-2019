function toggle() {
	const STYLES = {
		LESS_BTN: 'block',
		MORE_BTN: 'none'
	};

	const TEXTS = {
		LESS_BTN: 'Less',
		MORE_BTN: 'More'
	};

	const button = document.getElementsByClassName('button')[0];
	const div = document.getElementById('extra');

	const changeBtn = (displayStile, text) => {
		div.style.display = displayStile;
		button.textContent = text;
	}

	const moreBtnIsActive = button.textContent === TEXTS.MORE_BTN;

	if (moreBtnIsActive) {
		changeBtn(STYLES.LESS_BTN, TEXTS.LESS_BTN);

	} else {
		changeBtn(STYLES.MORE_BTN, TEXTS.MORE_BTN);
	}
}
