function carFactory(carData) {
    const ENGINES = [{ power: 90, volume: 1800  },
                     { power: 120, volume: 2400},
                     { power: 200, volume: 3500} ]

    const model = carData.model;
    const engine = ENGINES.find(e => e.power >= carData.power);
    const carriage = {
        type: carData.carriage,
        color: carData.color
    };
    
    const wheels = Array.from({ length: 4 }, () =>
        carData.wheelsize % 2 === 1 ? carData.wheelsize : carData.wheelsize - 1
    )

    return {
        model,
        engine,
        carriage,
        wheels
    };
}
//test:
// const car = carFactory({ model: 'Opel Vectra',
// power: 110,
// color: 'grey',
// carriage: 'coupe',
// wheelsize: 17 }
// );

// console.log(car)