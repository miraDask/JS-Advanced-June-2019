(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        return this.filter((e, i) => i >= n);
    }

    Array.prototype.take = function(n) {
        return this.filter((e, i) => i < n);
    }

    Array.prototype.sum = function() {
        return this.reduce((a, c) => a + c, 0);
    }

    Array.prototype.average = function(n) {
        return this.sum() / this.length;
    }
})();