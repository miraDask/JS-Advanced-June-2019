(function () {
    String.prototype.ensureStart = function(str) {
        return this.startsWith(str) ? this.toString() : str + this;
    },

    String.prototype.ensureEnd = function(str) {
        return this.endsWith(str) ? this.toString() : this + str;
    },

    String.prototype.isEmpty = function() {
        return this.length === 0;
    },

    String.prototype.truncate = function(n) {
        if( this.length <= n ){
           return this.toString();
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if(!this.includes(' ')) {
            return this.substr(0, n - 3) + '...';
        } else {
            let result = this;
            while(true) {
                const index = result.lastIndexOf(' ');
                result = result.substring(0, index) + '...' ;
                if(result.length <= n) {
                    break
                }
            }
            
            return result;
        }
    },

    String.format = function(str, ...params) {
        params.forEach((param, index) => (str = str.replace(`{${index}}`, param)))
        return str.toString()
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)

str = str.truncate(16);
console.log(str)

str = str.truncate(14);
console.log(str)

str = str.truncate(8);
console.log(str)

str = str.truncate(4);
console.log(str)

str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str)
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str)


