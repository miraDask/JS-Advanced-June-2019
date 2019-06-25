class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        const getProduct = (productData) => {
            const [name, quantity, price] = productData.split(' ');
            return {
                name: name,
                quantity: +quantity,
                price: +price
            }
        }

        const tryToByuProduct = (product) => {
            let productIsBought = false;
            if (product.price <= this.budget) {
                if (!this.productsInStock.hasOwnProperty(product.name)) {
                    this.productsInStock[product.name] = 0;
                }

                this.productsInStock[product.name] += product.quantity;
                this.budget -= product.price;
                productIsBought = true;
            }

            return productIsBought;
        }

        const addReport = (product, productIsPurchased) => {
            const report = {
                true: `Successfully loaded ${product.quantity} ${product.name}`,
                false: `There was not enough money to load ${product.quantity} ${product.name}`
            }

            this.actionsHistory.push(report[productIsPurchased]);
        }

        products.forEach(pd => {
            const product = getProduct(pd);
            const productIsPurchased = tryToByuProduct(product);
            addReport(product, productIsPurchased);
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        const addMealToTheMenu = () => {
            this.menu[meal] = {
                products: neededProducts,
                price: +price
            }
        }

        const report = (key) => {
            const reports = {
                addedMeal: `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`,
                mealExistInMenu: `The ${meal} is already in our menu, try something different.`
            }

            return reports[key];
        }

        if (!this.menu.hasOwnProperty(meal)) {
            addMealToTheMenu(neededProducts);
            return report('addedMeal');
        } else {
            return report('mealExistInMenu');
        }
    }

    showTheMenu() {
        const menuIsEmptyMessage = 'Our menu is not ready yet, please come later...';
        const meals = Object.keys(this.menu);

        const getMenuInfo = () => {
            let info = [];
            meals.forEach(meal => {
                info.push(`${meal} - $ ${this.menu[meal].price}`);
            });

            return info;
        }

        if (meals.length === 0) {
            return menuIsEmptyMessage;
        } else {
            const menuInfo = getMenuInfo();
            return menuInfo.join('\n') + '\n';
        }
    }

    makeTheOrder(meal) {
        const getProducts = () => {
            let products = {};
            let productsData = this.menu[meal].products;
            productsData.forEach(pd => {
                const [productName, quantity] = pd.split(' ');
                products[productName] = +quantity;
            })

            return products;
        }
        const productsCheck = (products) => {
            let result = true;

            Object.keys(products).forEach(product => {
                if (!this.productsInStock.hasOwnProperty(product) ||
                    products[product] > this.productsInStock[product]) {
                    result = false;
                }
            })

            return result;
        }

        const useProducts = (products) => {
            Object.keys(products).forEach(product => {
                this.productsInStock[product] -= products[product];
            })
        }

        const gainProfit = () => {
            this.budget += this.menu[meal].price;
        }

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            const products = getProducts();
            const haveAllNeededProducts = productsCheck(products);
            if (!haveAllNeededProducts) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } else {
                useProducts(products);
                gainProfit();
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            }
        }
    }
}
//local tests:
// let kitchen = new Kitchen(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// console.log(kitchen.actionsHistory)
// console.log(kitchen.productsInStock);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('Pizza'));
// console.log(kitchen.makeTheOrder('Pizza'));

// for (let i = 0; i < 105; i++) {

//     console.log(kitchen.makeTheOrder('frozenYogurt'));

// }

// console.log(kitchen.productsInStock)