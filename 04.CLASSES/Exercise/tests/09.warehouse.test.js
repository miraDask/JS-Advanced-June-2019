const assert = require('chai').assert;
const Warehouse = require('../09.warehouse');

describe('Warehouse tests:', () => {
    let warehouse;
    beforeEach(() => {
        warehouse = new Warehouse(32);
    })

    describe('constructor tests - new instance...', () => {
        it('is object', () => {
            assert.isObject(warehouse);
        })

        it('has correct capacity', () => {
            assert.equal(warehouse.capacity, 32);
        })

        it('has correct initial storage(availableProducts)', () => {
            assert.isObject(warehouse.availableProducts);
            assert.equal(JSON.stringify(warehouse.availableProducts), '{"Food":{},"Drink":{}}');
        })

        it('throws message if non-number-capacity-arg is passed', () => {
            assert.throws(() => new Warehouse('abc'), 'Invalid given warehouse space');
        })

        it('has all methods', () => {
            assert.isFunction(Warehouse.prototype.addProduct);
            assert.isFunction(Warehouse.prototype.orderProducts);
            assert.isFunction(Warehouse.prototype.occupiedCapacity);
            assert.isFunction(Warehouse.prototype.revision);
            assert.isFunction(Warehouse.prototype.scrapeAProduct);
        })

        it('throws message if negative-number-capacity-arg is passed', () => {
            assert.throws(() => new Warehouse(-1), 'Invalid given warehouse space');
        })

        it('throws message if zero as capacity-arg is passed', () => {
            assert.throws(() => new Warehouse(0), 'Invalid given warehouse space');
        })

    })

    describe('occupiedCapacity method tests:', () => {
        it('returns correct result', () => {
            assert.equal(warehouse.occupiedCapacity(), 0);
        })
    })

    describe('addProduct method tests:', () => {
        it('adds correct quantity', () => {
            warehouse.addProduct('Food', 'Fish', 32);
            assert.equal(JSON.stringify(warehouse.availableProducts), '{"Food":{"Fish":32},"Drink":{}}');
        })

        it('throws message if warehouse is full', () => {
            warehouse.addProduct('Food', 'Fish', 32);
            assert.throws(() => warehouse.addProduct('Food', 'Fish', 32), 'There is not enough space or the warehouse is already full');
        })
    })

    describe('orderProducts method tests:', () => {
        it('sorts food in descending order by quantity', () => {
            warehouse.addProduct('Food', 'Fish', 1);
            warehouse.addProduct('Food', 'Meat', 4);
            warehouse.addProduct('Food', 'Veggies', 2);
            assert.equal(JSON.stringify(warehouse.orderProducts('Food')), '{"Meat":4,"Veggies":2,"Fish":1}');
        })
    })

    describe('revision method tests:', () => {
        it('returns correct message if storage is empty', () => {
            assert.equal(warehouse.revision(), 'The warehouse is empty');
        })

        it('returns correct report if there are products in the storage', () => {
            warehouse.addProduct('Food', 'Fish', 1);
            warehouse.addProduct('Food', 'Meat', 4);
            warehouse.addProduct('Drink', 'Water', 2);

            const expected = 'Product type - [Food]' + '\n' +
                '- Fish 1' + '\n' +
                '- Meat 4' + '\n' +
                'Product type - [Drink]' + '\n' +
                '- Water 2';

            assert.equal(warehouse.revision(), expected);
        })
    })

    describe('scrapeAProduct method tests:', () => {
        it('throws message if product do not exist in storage', () => {
            assert.throws(() => warehouse.scrapeAProduct('Water', 2), 'Water do not exists');
        })

        it('decries the quantity of passed product and returns correct output' +
            ' if quantity of product is bigger than passed quantity', () => {
                warehouse.addProduct('Food', 'Fish', 1);
                warehouse.addProduct('Food', 'Meat', 4);
                const result = JSON.stringify(warehouse.scrapeAProduct('Meat', 2));
                const expected = '{"Fish":1,"Meat":2}';

                assert.equal(result, expected);
            })

        it('decries the quantity of passed product and returns correct output' +
            ' if quantity of product is less than passed quantity', () => {
                warehouse.addProduct('Food', 'Fish', 1);
                warehouse.addProduct('Food', 'Meat', 4);
                const result = JSON.stringify(warehouse.scrapeAProduct('Fish', 2));
                const expected = '{"Fish":0,"Meat":4}';

                assert.equal(result, expected);
            })
    })
})