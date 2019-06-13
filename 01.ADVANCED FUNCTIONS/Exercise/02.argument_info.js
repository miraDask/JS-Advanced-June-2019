function solve() {
    let argumentsSummary = {};
    const argumentsArr = Array.from(arguments);

    argumentsArr.forEach(x => {
        let type = typeof x;
        console.log(`${type}: ${x}`);

        if (!argumentsSummary.hasOwnProperty(type)) {
            argumentsSummary[type] = 0;
        }
        argumentsSummary[type]++;
    });

    for (const entry of Object.entries(argumentsSummary).sort((a, b) => b[1] - a[1])) {
        console.log(`${entry[0]} = ${entry[1]}`);
    }
}

solve(42, 'cat', 15, 'kitten', 'tomcat');