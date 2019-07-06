function solve() {
    const loginBtn = document.getElementById('loginBtn');
    const loginInputField = document.getElementById('username');
    const notificationElement = document.getElementById('notification');
    const offer = document.getElementById('create-offers');
    const offerBtn = document.getElementById('create-offer-Btn');
    const offersContainer = document.getElementById('offers-container');

    offer.style.display = 'none';

    const handleClickEvent = () => {

        if (loginBtn.textContent === 'Login') {
            const username = loginInputField.value;

            if (username.length < 4 || username.length > 10) {
                notificationElement.textContent = 'The username length should be between 4 and 10 characters.';
            } else {
                notificationElement.textContent = '';
                offer.style.display = 'block';
                loginInputField.value = `Hello, ${username}!`;
                loginInputField.disabled = 'disabled';
                loginInputField.className = 'form-control mr-sm-2 border-0 bg-light';
                loginBtn.textContent = 'Logout';

                const handleOffer = () => {
                    const offerNameElement = document.getElementById('offerName');
                    const offerName = offerNameElement.value;
                    const companyElement = document.getElementById('company');
                    const company = companyElement.value;
                    const descriptionElement = document.getElementById('description');
                    const description = descriptionElement.value;

                    if (offerName && company && description) {
                        const getDivElement = () => {
                            const div = document.createElement('div');
                            div.className = 'col-3';

                            const div1 = document.createElement('div');
                            div1.className = 'card text-white bg-dark mb-3 pb-3';
                            div1.style = 'max-width: 18rem';

                            const div2 = document.createElement('div');
                            div2.className = 'card-header';
                            div2.textContent = offerName;
                            div1.appendChild(div2);

                            const div3 = document.createElement('div');
                            div3.className = 'card-body';
                            const h5 = document.createElement('h5');
                            h5.className = 'card-title';
                            h5.textContent = company;
                            div3.appendChild(h5);
                            const p = document.createElement('p');
                            p.className = 'card-text';
                            p.textContent = description;
                            div3.appendChild(p);

                            div1.appendChild(div3);

                            div.appendChild(div1);
                            return div;
                        }

                        const div = getDivElement();
                        offersContainer.appendChild(div);
                        offerNameElement.value = '';
                        companyElement.value = '';
                        descriptionElement.value = '';
                    }
                }

                offerBtn.addEventListener('click', handleOffer);
            }

        } else {
            loginBtn.textContent = 'Login';
            offer.style.display = 'none';
            loginInputField.disabled = false;
            loginInputField.className = 'form-control mr-sm-2';
            loginInputField.value = '';
        }
    }

    loginBtn.addEventListener('click', handleClickEvent);
}

solve();