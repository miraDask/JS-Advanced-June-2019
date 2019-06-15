function validate() {
	const input = document.querySelector('#email');

	const checkEmail = (ev) => {
		const email = input.value;
		const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
		const match = email.match(emailPattern);
		if (!match) {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	}

	input.addEventListener('change', checkEmail)
}
