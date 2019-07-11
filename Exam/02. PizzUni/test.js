const assert = require('chai').assert;
const PizzUni = require('./02. PizzUni');

describe('PizzUni tests...', () => {
    let pizzUni;
    const email = 'aaa@abv.bg';
    
    beforeEach(() => {
        pizzUni = new PizzUni();
    })

    describe('constructor...', () => {
        it('creates "registeredUsers" property as empty array', () => {
            assert.deepEqual(pizzUni.registeredUsers, []);
        })

        it('creates "orders" property as empty array', () => {
            assert.deepEqual(pizzUni.orders, []);
        })

        it('creates "availableProducts" prop as correct object', () => {
            const expected = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            }

            const result = pizzUni.availableProducts;
            assert.deepEqual(result, expected);
        })
    })

    describe('registerUser method...', () => {
        it('adds new user correctly in "registeredUsers" property', () => {
            pizzUni.registerUser(email);
            const expected = [{
                email: email,
                orderHistory: []
            }];

            assert.deepEqual(pizzUni.registeredUsers, expected)
        })

        it('returns correct obj', () => {
            const result = pizzUni.registerUser(email);
            const expected = {
                email: email,
                orderHistory: []
            };
            assert.deepEqual(result, expected)
        })

        it('throws Error if email is already registered', () => {
            pizzUni.registerUser(email);
            assert.throw(() => pizzUni.registerUser(email), `This email address (${email}) is already being used!`)
        })

        describe('makeAnOrder method...', () => {
            it('throws Error if email is not registered', () => {
                assert.throws(() => pizzUni.makeAnOrder(email, 'Italian Style', 'Coca-Cola'), `You must be registered to make orders!`)
            })

            it('throws Error if not present in menu pizza is ordered', () => {
                pizzUni.registerUser(email);

                assert.throws(() => pizzUni.makeAnOrder(email, 'any', 'Coca-Cola'), `You must order at least 1 Pizza to finish the order.`)
            })

            it('register correctly', () => {
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
                pizzUni.registerUser(email);
                pizzUni.makeAnOrder(email, 'Italian Style', 'Coca');
                let result = pizzUni.detailsAboutMyOrder(0);
                
                assert.equal(result, `Status of your order: pending`);
            })
        })
    })

    describe('doesTheUserExist...', () => {
        it('returns correct', () => {
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