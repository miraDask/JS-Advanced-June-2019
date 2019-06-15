function focus() {
    let inputElements = Array.from(document.querySelectorAll('input'));

    function setFocus(e) {
        const parent = e.target.parentNode;
        parent.classList.add('focused');
    }

    function removeFocus(e) {
        const parent = e.target.parentNode;
        parent.classList.remove('focused');
    }

    inputElements.forEach(e => {
        e.addEventListener('focus', setFocus);
        e.addEventListener('blur', removeFocus);
    });


}