function DOMModifier() {
    let firstNumElement;
    let secondNumElement;
    let resultElement;

    const init = (selector1, selector2, resultSelector) => {
        firstNumElement = document.querySelector(selector1);
        secondNumElement = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    const add = () => {
        resultElement.value = Number(firstNumElement.value) + Number(secondNumElement.value);
    }

    const subtract = () => {
        resultElement.value = firstNumElement.value - secondNumElement.value;
    }

    return {
        init,
        add,
        subtract
    }
}