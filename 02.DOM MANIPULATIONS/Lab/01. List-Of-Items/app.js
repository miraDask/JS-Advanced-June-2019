function addItem() {
    const input = document.getElementById('newItemText').value;
    const output = document.getElementById('items');
    output.innerHTML += `<li>${input}</li>`;
}