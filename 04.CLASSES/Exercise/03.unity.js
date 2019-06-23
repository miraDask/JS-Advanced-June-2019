class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(newRat) {
        if (newRat instanceof Rat) {
            this.unitedRats.push(newRat);
        }
    }

    toString() {
        let result = this.name;
        if(this.unitedRats.length > 0){
            result += '\n';
            const unitedRatsNames = this.unitedRats.map(r => {
                return `##${r.name}`
            })
            result += unitedRatsNames.join('\n');
        }

        return result;
    }

    getRats() {
        return this.unitedRats;
    }
}
// test:
// let firstRat = new Rat("Peter");
// console.log(firstRat.toString()); // Peter
 
// console.log(firstRat.getRats()); // []

// firstRat.unite(new Rat("George"));
// firstRat.unite(new Rat("Alex"));
// console.log(firstRat.getRats());
// // [ Rat { name: 'George', unitedRats: [] },
// //  Rat { name: 'Alex', unitedRats: [] } ]

// console.log(firstRat.toString());
// // Peter
// // ##George
// // ##Alex
