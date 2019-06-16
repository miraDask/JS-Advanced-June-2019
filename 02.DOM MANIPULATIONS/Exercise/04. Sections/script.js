function create(words) {
	const content = document.getElementById('content');

	const createDivWithParagraph = (function () {
		const divTemplate = document.createElement('div');
		const pTemplate = document.createElement('p');
		pTemplate.style.display = 'none';

		return (text) => {
			const div = divTemplate.cloneNode();
			const p = pTemplate.cloneNode();
			p.textContent = text;
			div.appendChild(p);
			return div;
		}
	})();

	const displayParagrph = (e) => {
		e.target.firstElementChild.removeAttribute("style");
	}

	words.forEach(w => {
		const div = createDivWithParagraph(w);
		div.addEventListener('click', displayParagrph)
		content.appendChild(div);
	})
}
