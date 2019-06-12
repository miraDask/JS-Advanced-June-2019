function getArticleGenerator(input) {
    const output = document.getElementById('content');
    let counter = 0;
    return function () {
        if (counter >= input.length) {
            return;
        }
        output.innerHTML += `<article>${input[counter++]} </article>`;
    }
}