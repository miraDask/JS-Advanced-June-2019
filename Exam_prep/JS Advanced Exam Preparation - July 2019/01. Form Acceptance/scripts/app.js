function acceptance() {
	const addBtn = document.getElementById('acceptance');
	const warehouse = document.getElementById('warehouse');
		
	const companyElement = document.querySelector('input[name="shippingCompany"]');
	const productElement = document.querySelector('input[name="productName"]');
	const productQuantityElement = document.querySelector('input[name="productQuantity"]');
	const productScrapeElement = document.querySelector('input[name="productScrape"]');
	
	const clearInputFields = () => {
		companyElement.value = '';
		productElement.value = '';
		productQuantityElement.value = '';
		productScrapeElement.value = '';
	}

	const handleClickEvent = function() {
		const company = companyElement.value;
		const product = productElement.value;
		const quantity = +productQuantityElement.value;
		const scrape = +productScrapeElement.value;

		clearInputFields();

		if(company && product && quantity && scrape) {
			const finalQuantity = quantity - scrape;
			
			if(finalQuantity <= 0) {
				return;
			}

			const div = document.createElement('div');
			const p = document.createElement('p');
			p.textContent = `[${company}] ${product} - ${finalQuantity} pieces`;
			div.appendChild(p);
			const btn = document.createElement('button');
			btn.textContent = 'Out of stock';
			div.appendChild(p);
			div.appendChild(btn);
			warehouse.appendChild(div);
			
			btn.addEventListener('click', () => div.remove());
		}
	}

	addBtn.addEventListener('click', handleClickEvent);
}