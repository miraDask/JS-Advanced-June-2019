function getChart(name, age, weight, height) {
    const personBMI = Math.round(weight / Math.pow(height / 100, 2));
    const getStatus = (personBMI) => {
        if (personBMI < 18.5) {
            return 'underweight';
        } else if (personBMI < 25) {
            return 'normal';
        } else if (personBMI < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    };

    let chart = {
        name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: personBMI,
        status: getStatus(personBMI)
    };

    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }

    return chart;
}


console.log(getChart('Honey Boo Boo', 9.4, 57.6, 137.34));

/*•	underweight, for BMI less than 18.5;
•	normal, for BMI less than 25;
•	overweight, for BMI less than 30;
•	obese, for BMI 30 or more;
*/