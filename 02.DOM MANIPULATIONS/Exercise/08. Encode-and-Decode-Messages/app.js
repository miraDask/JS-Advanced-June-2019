function encodeAndDecodeMessages() {
	const CODING_COMMANDS = {
		ENCODE: 'encode',
		DECODE: 'decode'
	}

	const [messageArea, receiverArea] = document.getElementsByTagName('textarea');
	const buttons = document.getElementsByTagName('button');

	const handleMessage = (message, command) => {
		let result = '';
		let modifier = command === CODING_COMMANDS.ENCODE ? 1 : -1;
		[...message].forEach(s => {
			let code = s.charCodeAt(0) + modifier;
			result += String.fromCharCode(code);
		})

		return result;
	}

	const clearSenderArea = () => messageArea.value = '';

	const displayMessage = (message) => {
		receiverArea.value = message;
	}

	const handleEvent = (ev) => {
		let message = '';
		if (ev.target === buttons[0]) {
			message = messageArea.value;
			clearSenderArea();
			const encodedMessage = handleMessage(message, CODING_COMMANDS.ENCODE);
			displayMessage(encodedMessage);
		} else {
			message = receiverArea.value;
			const decodedMessage = handleMessage(message, CODING_COMMANDS.DECODE);
			displayMessage(decodedMessage);
		}
	}

	[...buttons].forEach(b => b.addEventListener('click', handleEvent));

}
