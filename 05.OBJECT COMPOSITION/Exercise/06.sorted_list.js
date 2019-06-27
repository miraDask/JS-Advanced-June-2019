function sortedListFactory() {
    const list = [];
    return {
        size: 0,
        add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
            this.size++;
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        }
    }
}

let obj = sortedListFactory();
obj.add(1);
obj.add(5);
obj.add(4);
obj.add(2);
console.log(obj.get(2))
obj.remove(2)
console.log(obj.get(2))