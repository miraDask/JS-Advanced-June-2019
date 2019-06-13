function solve() {

    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple : {
            carbohydrate : 1,
            flavour : 2
        } ,
	    lemonade : {
            carbohydrate: 10,
            flavour : 20
        },
	    burger :{
            carbohydrate: 5,
            fat: 7,
            flavour : 3
            },
	   eggs  :{
           protein : 5,
           fat: 1,
           flavour : 1
       },
	   turkey  :{
           protein: 10,
           carbohydrate: 10,
           fat: 10,
           flavour : 10
       }
    };

   return function (input) {
        const data = input.split(' ');
        const command = data.shift();

        function restock(microElement, quantity) {
            if (!microElements[microElement]){
                microElements[microElement] = 0;
            }
            microElements[microElement] += quantity;
            return 'Success';
        }

        function prepare(recipe, quantity) {
            let result = '';
            const ingredients = recipes[recipe];
            let haveAllIngredients = true;
            let missingIngredient = '';

            for (const entry of Object.entries(ingredients)) {
                const ingredient = entry[0];
                const ingredientQuantity = entry[1];
                if (ingredientQuantity * quantity > microElements[ingredient] ) {
                    haveAllIngredients = false;
                    missingIngredient = ingredient;
                    break;
                }
            }

            if (haveAllIngredients) {
                for (const entry of Object.entries(ingredients)) {
                    const ingredient = entry[0];
                    const ingredientQuantity = entry[1];
                    microElements[ingredient] -= ingredientQuantity * quantity;
                }
                result = 'Success';
            } else {
                result = `Error: not enough ${missingIngredient} in stock`;
            }

            return result;
        }

        function report() {

            return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
        }

        let result = '';

        if (command === 'restock') {
           result = restock(data[0], +data[1]);
        } else if (command === 'prepare'){
            result = prepare(data[0], + data[1]);
        } else if (command === 'report'){
            result = report();
        }

        return result;
    }
}

/*let manager = solve();

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));*/






