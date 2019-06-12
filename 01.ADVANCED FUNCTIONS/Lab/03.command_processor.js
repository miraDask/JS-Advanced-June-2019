function solution() {
    let text = '';
    return{
        append: (str) => text += str,
        removeStart: (n) => text = text.substring(n),
        removeEnd: (n) => text = text.substring(0, text.length - n),
        print:() => console.log(text)
    }
}

let firstZero = solution();
let secondZero = solution();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3);
secondZero.removeEnd(4);

firstZero.print();
secondZero.print();