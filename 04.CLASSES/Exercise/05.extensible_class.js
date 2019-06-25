const Extensible = (function() {
    let currentId = 0;

    class Extensible {
        constructor() {
            this.id = currentId++;
        }

        extend(template) {
            for (const key in template) {
                if (typeof template[key] === 'function') {
                   Extensible.prototype[key] = template[key];
                    
                } else {
                    this[key] = template[key];
                }
            }
        }
    }

    return Extensible;
})()
//test:
// let obj1 = new Extensible();
// let obj2 = new Extensible();
// let obj3 = new Extensible();
// console.log(obj1.id);
// console.log(obj2.id);
// const template =  {
//     extensionMethod:  () =>  {console.log('I`m extended.')},
//     extensionProperty: 'someString'
//   }
//   obj3.extend(template);
// console.log(obj3.__proto__);
