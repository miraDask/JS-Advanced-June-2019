class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.actionsHistory = [];
        this.menu = {};
    }

    loadProducts(products) {
        let actionsReport = [];
        const parseProductData = (productData) => {
            const [name, quantity, price] = [...productData.split(' ')];
            return {
                name: name,
                quantity: +quantity,
                price: +price
            }
        }

        const byuProduct = (product) => {
            if (this.budget >= product.price) {
                if (!this.productsInStock[product.name]) {
                    this.productsInStock[product.name] = 0;
                }

                this.productsInStock[product.name] += product.quantity;
                this.budget -= product.price;
                return true;

            } else {
                return false;
            }
        }

        const addReport = (product, productIsPurchased) => {
            if (productIsPurchased) {
                actionsReport.push(`Successfully loaded ${product.quantity} ${product.name}`);
            } else {
                actionsReport.push(`There was not enough money to load ${product.quantity} ${product.name}`);
            }
        }

        products.forEach(pd => {
            const product = parseProductData(pd);
            const productIsPurchased = byuProduct(product);
            addReport(product, productIsPurchased);
            this.actionsHistory.push(...actionsReport);
        });

        return actionsReport.join('\n');
    }

    addToMenu(meal, neededProductsData, price) {
        const getProducts = (neededProductsData) => {
            let products = {};

            neededProductsData.forEach(pd => {
                const [name, quantity] = [...pd.split(' ')];
                products[name] = +quantity;
            })

            return products;
        }

        const addMealToTheMenu = (neededProducts) => {
            this.menu[meal] = {
                neededProducts,
                price
            }
        }

        const report = (key) => {
            const reports = {
                addedMeal: `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`,
                mealExistInMenu: `The ${meal} is already in our menu, try something different.`
            }

            return reports[key];
        }

        const neededProducts = getProducts(neededProductsData);

        if (!this.menu[meal]) {
            addMealToTheMenu(neededProducts);
            return report('addedMeal');
        } else {
            return report('mealExistInMenu');
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            const menuInfo = [];
            Object.keys(this.menu).forEach(key => {
                menuInfo.push(`${key} - $ ${this.menu[key].price}`);
            });

            return menuInfo.join('\n');
        }
    }

    makeTheOrder(meal) {
        const productsCheck = () => {
            let result = true;

            Object.keys(this.menu[meal].neededProducts).forEach(product => {
                if (!this.productsInStock[product]) {
                    result = false;
                }

                if (this.menu[meal].neededProducts[product] > this.productsInStock[product]) {
                    result = false;
                }
            })

            return result;
        }

        const useProducts = () => {
            Object.keys(this.menu[meal].neededProducts).forEach(product => {
                this.productsInStock[product] -= this.menu[meal].neededProducts[product];
                if (this.productsInStock[product] <= 0) {
                    delete this.productsInStock[product];
                }
            })
        }

        const gainProfit = () => {
            this.budget += this.menu[meal].price;
        }

        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const haveAllNeededProducts = productsCheck();
            if (!haveAllNeededProducts) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                useProducts();
                gainProfit();
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.actionsHistory)
console.log(kitchen.productsInStock);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.makeTheOrder('Pizza');
kitchen.makeTheOrder('Pizza');

for (let i = 0; i < 105; i++) {

    kitchen.makeTheOrder('frozenYogurt');
}

console.log(kitchen.productsInStock)