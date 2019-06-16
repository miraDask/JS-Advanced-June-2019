function notify(message) {
	const notification = document.getElementById('notification');
	notification.textContent = message;
	notification.style.display = 'block';

	const hideMessage = () => {
		notification.style.display = 'none';

	}

	setTimeout(hideMessage, 2000);
}