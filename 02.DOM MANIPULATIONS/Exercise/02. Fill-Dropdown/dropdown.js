function addItem() {
	const valueInputField = document.getElementById('newItemValue');
	const textInputField = document.getElementById('newItemText');

	const newItemValue = valueInputField.value;
	const newItemText = textInputField.value;
	const menu = document.getElementById('menu');

	let createNewOption = (function () {
		const optionTemplate = document.createElement('option');

		return (value, text) => {
			const option = optionTemplate.cloneNode();
			option.value = value;
			option.textContent = text;
			return option;
		}

	})()

	const clearInputFields = () => {
		valueInputField.value = '';
		textInputField.value = '';
	}

	const newOption = createNewOption(newItemValue, newItemText);
	menu.appendChild(newOption);
	clearInputFields();

}
