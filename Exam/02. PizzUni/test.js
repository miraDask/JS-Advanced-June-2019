const assert = require('chai').assert;
const PizzUni = require('./02. PizzUni_Ресурси');

describe('myClass...', () => {

    describe('constructor...', () => {
        it('creates 2 empty arrays', () => {
            const pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.registeredUsers, []);
            assert.deepEqual(pizzUni.orders, []);
        })

        it('creates empty arry', () => {
            const pizzUni = new PizzUni();
            assert.deepEqual(pizzUni.orders, []);

        })

        it('creates obj', () => {
            const pizzUni = new PizzUni();

            const expected = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            }

            assert.equal(JSON.stringify(pizzUni.availableProducts), JSON.stringify(expected));
        })

    })

    describe('registerUser...', () => {
        it('add new user correctly', () => {
            const pizzUni = new PizzUni();
            pizzUni.registerUser('aaa@abv.bg');
            const expected = [{
                email: 'aaa@abv.bg',
                orderHistory: []
            }];
            assert.deepEqual(pizzUni.registeredUsers, expected)
        })

        it('returns correct obj', () => {
            const pizzUni = new PizzUni();
            const result = pizzUni.registerUser('aaa@abv.bg');
            const expected = {
                email: 'aaa@abv.bg',
                orderHistory: []
            };
            assert.deepEqual(result, expected)
        })

        it('throws', () => {
            const pizzUni = new PizzUni();
            const email = 'aaa@abv.bg';
            pizzUni.registerUser(email);
            assert.throw(() => pizzUni.registerUser(email), `This email address (${email}) is already being used!`)
        })

        describe('makeAnOrder...', () => {
            it('throws', () => {
                const pizzUni = new PizzUni();

                assert.throws(() => pizzUni.makeAnOrder('aaa@abv.bg', 'any', 'any'), `You must be registered to make orders!`)
            })

            it('throws', () => {
                const pizzUni = new PizzUni();
                const email = 'aaa@abv.bg';
                pizzUni.registerUser(email);

                assert.throws(() => pizzUni.makeAnOrder(email, 'any', 'any'), `You must order at least 1 Pizza to finish the order.`)
            })

            it('register correctly', () => {
                const pizzUni = new PizzUni();
                const email = 'aaa@abv.bg';
                pizzUni.registerUser(email);
                let result = pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
                
                let user = pizzUni.registeredUsers.find(u => u.email);
                let firstObj = [{
                    orderedPizza : 'Italian Style',
                    orderedDrink : 'Coca-Cola'
                }];

                let secondObj = [{
                    orderedPizza : 'Italian Style',
                    orderedDrink : 'Coca-Cola',
                    email : email,
                    status: 'pending'
                }]

                assert.deepEqual(user.orderHistory, firstObj)
                assert.deepEqual(pizzUni.orders, secondObj)
                assert.equal(result, 0);
            })

            it('register correctly', () => {
                const pizzUni = new PizzUni();
                const email = 'aaa@abv.bg';
                pizzUni.registerUser(email);
                let result = pizzUni.makeAnOrder(email, 'Italian Style', 'Coca');
                
                let user = pizzUni.registeredUsers.find(u => u.email);
                let firstObj = [{
                    orderedPizza : 'Italian Style'
                }];

                let secondObj = [{
                    orderedPizza : 'Italian Style',
                    email : email,
                    status: 'pending'
                }]

                assert.deepEqual(user.orderHistory, firstObj)
                assert.deepEqual(pizzUni.orders, secondObj)
                assert.equal(result, 0);
            })

        })

        describe('completeOrder...', () => {
            it("correct", () => {
                const pizzUni = new PizzUni();
                const email = 'aaa@abv.bg';
                pizzUni.registerUser(email);
                pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola');
                let result = pizzUni.completeOrder();
                let expected = {
                    orderedPizza : 'Italian Style',
                    orderedDrink : 'Coca-Cola',
                    email : email,
                    status: 'completed'
                }

                assert.deepEqual(expected, result);

            })

            it('register correctly', () => {
                const pizzUni = new PizzUni();
                const email = 'aaa@abv.bg';
                pizzUni.registerUser(email);
                pizzUni.makeAnOrder(email, 'Italian Style', 'Coca');
                let result = pizzUni.detailsAboutMyOrder(0);
                
                assert.equal(result, `Status of your order: pending`);
            })
        })
    })

    describe('doesTheUserExist...', () => {
        it('returns correct', () => {
            const pizzUni = new PizzUni();
            const email = 'aaa@abv.bg';
            pizzUni.registerUser(email);
           
            let result = pizzUni.doesTheUserExist(email);
            let expected = {
                email,
                orderHistory: []
            };

            assert.deepEqual(expected, result)
        })
    })

})

//mocha .\test