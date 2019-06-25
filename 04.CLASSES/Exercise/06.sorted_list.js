class List {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    add(number) {
        if (typeof number !== 'number') {
            throw new Error('Invalid argument!');
        }

        this.storage.push(number);
        this._sort();
        this.size++;
    }

    remove(index) {
        this._validateIndex(index);
        this.storage.splice(index, 1);
        this._sort();
        if (this.storage.length > 0) {
            this.size--;
        }
    }

    get(index) {
        this._validateIndex(index);
        return this.storage[index];
    }

    _validateIndex(index) {
        if (typeof index !== 'number' ||
            index < 0 ||
            index > this.storage.length) {
            throw new RangeError('Invalid index!');
        }
    }
    _sort() {
        this.storage.sort((a, b) => a - b);
    }
}
//test:
// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));
// console.log(list.size);