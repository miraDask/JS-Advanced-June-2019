function solve() {
    const COURSES = {
        'js-fundamentals': {
            name: 'JS-Fundamentals',
            cost: 170
        },
        'js-advanced': {
            name: 'JS-Advanced',
            cost: 180
        },
        'js-applications': {
            name: 'JS-Applications',
            cost: 190
        },
        'js-web': {
            name: 'JS-Web',
            cost: 490
        },
        'bonus-course': {
            name: 'HTML and CSS',
            cost: 0
        }
    }

    const inputs = document.querySelectorAll('input');
    const btn = document.querySelector('.courseFoot button[value="signMeUp"]');
    const coursesOutput = document.querySelector('#myCourses .courseBody ul');
    const priceOutput = document.querySelector('#myCourses .courseFoot p');
    let chosenCourses = [];
    let educationForm = 'onsite';
    let totalPrice = 0;

    const displayRegisteredCourse = (course) => {
        const li = document.createElement('li');
        li.textContent = `${COURSES[course].name}`
        coursesOutput.appendChild(li);
    }

    const registerCourses = () => {
        const checkBoxes = [...inputs].filter(i => i.type === 'checkbox' && i.checked === true);
        const radio = [...inputs].filter(i => i.type === 'radio' && i.checked === true);
        educationForm = radio[0].value;
        
        checkBoxes.forEach(c => {
            chosenCourses.push(c.name);
            displayRegisteredCourse(c.name);
        })

        if (chosenCourses.length === 4) {
            displayRegisteredCourse('bonus-course');
        }
    }

    const calculateDiscount = () => {
        if (chosenCourses.includes('js-fundamentals')) {
            totalPrice += COURSES['js-fundamentals'].cost;
        }

        if (chosenCourses.includes('js-advanced')) {
            totalPrice += COURSES['js-advanced'].cost;
        }

        if (chosenCourses.includes('js-fundamentals') && chosenCourses.includes('js-advanced')) {
            totalPrice -= COURSES['js-advanced'].cost * 0.10;
        }

        if (chosenCourses.includes('js-applications')) {
            totalPrice += COURSES['js-applications'].cost;
        }

        if (chosenCourses.includes('js-fundamentals') &&
            chosenCourses.includes('js-advanced') &&
            chosenCourses.includes('js-applications')) {
            totalPrice -= totalPrice * 0.06;
        }

        if (chosenCourses.includes('js-web')) {
            totalPrice += COURSES['js-web'].cost;
        }

        if (educationForm === 'online' && totalPrice > 0) {
            totalPrice -= totalPrice * 0.06;
        }
    }

    const displayPrice = () => {
        priceOutput.textContent = `Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`;
    }

    const clearHistory = () => {
        coursesOutput.innerHTML = '';
        chosenCourses = [];
        totalPrice = 0;
    }

    const handleRegistration = function () {
        clearHistory();
        registerCourses();
        calculateDiscount();
        displayPrice();
    }

    btn.addEventListener('click', handleRegistration);
}

solve();