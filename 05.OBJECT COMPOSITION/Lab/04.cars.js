function solve(commandsData) {
    let commandsHandler = (function () {
        let storage = {};
        return {
            create(objName, inheritance, parentObjName) {
                const newCar = inheritance ? Object.create(storage[parentObjName]) : {};
                storage[objName] = newCar;
            },

            set(objName, propName, propValue) {
                storage[objName][propName] = propValue;
            },

            print(objName) {
                let info = [];
                for (const key in storage[objName]) {
                    info.push(`${key}:${storage[objName][key]}`);
                }
                console.log(info.join(', '));
            }
        }
    })();

    commandsData.forEach(cd => {
        const commandData = cd.split(' ');
        const command = commandData.shift();
        commandsHandler[command](...commandData);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);