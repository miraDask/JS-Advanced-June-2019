class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(this.innerLength - length, 0);
    }

    toString() {
        const dots =  '...';
        if(this.innerLength === 0) {
            return dots;
        }

        if(this.innerString.length > this.innerLength) {
            return this._getTruncatedString() + dots;
        } else {
            return this.innerString;
        }
    }

    _getTruncatedString() {
        const lengthOfNewString = this.innerString.length - this.innerLength;
        return this.innerString.substring(0, lengthOfNewString);
    }
}
//test:
// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Test
