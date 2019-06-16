function lockedProfile() {
	const BUTTON_TEXTS = {
		HIDE: 'Hide it',
		SHOW: 'Show more'
	}

	const SELECTORS = {
		ELEMENTS: {
			INFO_BTN: 'button',
			RADIO_BTN: 'input[type="radio"]'
		},
		STYLES: {
			HIDE_INFO: 'none',
			SHOW_INFO: 'block',
		}
	}

	const infoButtons = document.getElementsByTagName(SELECTORS.ELEMENTS.INFO_BTN);
	const radioButtons = document.querySelectorAll(SELECTORS.ELEMENTS.RADIO_BTN);

	const changeButtonText = (button, text) => {
		button.textContent = text;
	}

	const displayUserInfo = (button) => {
		button.previousElementSibling.style.display = SELECTORS.STYLES.SHOW_INFO;
		changeButtonText(button, BUTTON_TEXTS.HIDE);
	}

	const hideUserInfo = (button) => {
		button.previousElementSibling.style.display = SELECTORS.STYLES.HIDE_INFO;
		changeButtonText(button, BUTTON_TEXTS.SHOW);
	}

	const handleEvent = (ev) => {
		const radioBtnsInCurrentDiv = ev.target.parentElement.querySelectorAll(SELECTORS.ELEMENTS.RADIO_BTN);
		const userInfoIsUnlocked = radioBtnsInCurrentDiv[1].checked === true;
		const button = ev.target;

		if (userInfoIsUnlocked) {
			if (button.textContent === BUTTON_TEXTS.SHOW) {
				displayUserInfo(button);
			} else {
				hideUserInfo(button);
			}
		}
	}

	[...infoButtons].forEach(b => b.addEventListener('click', handleEvent));
}
