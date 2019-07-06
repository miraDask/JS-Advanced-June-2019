function addSticker() {
    const addBtn = document.getElementById('add-sticker');
    const inputs = document.querySelectorAll('input');
    const title = inputs[0].value;
    const text = inputs[1].value;
    const stickerList = document.getElementById('sticker-list');

    if(!title || !text) {
        return
    }

    const removeNote = function() {
        this.parentNode.remove();
    }
    
    const getListItem = () => {
        const li = document.createElement('li');
        li.className = 'note-content';
        
        const a = document.createElement('a');
        a.className = 'button';
        a.textContent = 'x';
        a.addEventListener('click', removeNote); 
        li.appendChild(a);
        
        const h2 = document.createElement('h2');
        h2.textContent = title;
        li.appendChild(h2);

        const hr = document.createElement('hr');
        li.appendChild(hr);

        const p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
 
        return li;
    }
    
    const newListItem = getListItem();
    stickerList.appendChild(newListItem);
    inputs[0].value = '';
    inputs[1].value = '';
}