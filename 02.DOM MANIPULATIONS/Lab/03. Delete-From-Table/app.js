function deleteByEmail() {
    const input = document.querySelector('input').value;
    const result = document.querySelector('#result');
    const tableDataCollection = Array.from(document.querySelectorAll('td'));
    const emailCollection = tableDataCollection
        .filter((td, i) => i % 2 !== 0)
        .map(e => e.textContent);

    if (!emailCollection.includes(input)) {
        result.textContent = 'Not found.';
    } else {
        const currentTd = tableDataCollection.find(td => td.textContent === input);
        const currentTr = currentTd.parentNode;
        const tableBody = currentTr.parentNode;
        tableBody.removeChild(currentTr);
        result.textContent = 'Deleted.';
    }
}