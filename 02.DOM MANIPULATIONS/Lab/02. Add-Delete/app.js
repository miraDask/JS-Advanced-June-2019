function addItem() {
    const input = document.getElementById('newText').value;
    const output = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = `${input}`;
    let deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');
    deleteLink.textContent = '[Delete]';
    li.appendChild(deleteLink);
    output.appendChild(li);

    function deleteListItem() {
        const currentList = li.parentNode;
        currentList.removeChild(li);
    }

    deleteLink.addEventListener('click', deleteListItem);
}
