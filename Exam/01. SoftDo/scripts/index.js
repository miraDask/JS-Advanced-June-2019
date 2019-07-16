// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    const imgSrc = './images/user.png';
    const elements = {
        btnSend: document.querySelector('button'),
        textArea: document.querySelector('section#inputSection textarea'),
        usernameArea: document.querySelector('input[type="username"]'),
        pendingField: document.getElementById('pendingQuestions'),
        openQuestionsField: document.getElementById('openQuestions')
    }

    elements.btnSend.addEventListener('click', loadNewQuestionInPendingSection);

    function loadNewQuestionInPendingSection() {
        const text = elements.textArea.value;

        if (!text) {
            return;
        }

        const username = elements.usernameArea.value ? elements.usernameArea.value : 'Anonymous';

        const divWrapper = createElement('div', 'pendingQuestion');
        const img = createImgElement(imgSrc, 32, 32);
        const span = createElement('span', '', username);
        const p = createElement('p', '', text);

        const divBtnWrapper = createElement('div', 'actions');
        const archiveBtn = createElement('button', 'archive', 'Archive');
        const openBtn = createElement('button', 'open', 'Open');

        parentAppendChildren([archiveBtn, openBtn], divBtnWrapper);
        parentAppendChildren([img, span, p, divBtnWrapper], divWrapper);
        elements.pendingField.appendChild(divWrapper);

        archiveBtn.addEventListener('click', function () {
            divWrapper.remove();
        });

        openBtn.addEventListener('click', loadQuestionInOpenQuestionsSection);

        elements.textArea.value = '';
        elements.usernameArea.value = '';
    }

    function loadQuestionInOpenQuestionsSection() {
        const divWrapper = this.parentNode.parentNode;
        divWrapper.className = 'openQuestion';

        const divBtnWrapper = divWrapper.lastChild;
        divBtnWrapper.removeChild(divBtnWrapper.firstChild);
        divBtnWrapper.removeChild(divBtnWrapper.firstChild);

        const replyBtn = createElement('button', 'reply', 'Reply');
        replyBtn.addEventListener('click', displayReplySection);
        parentAppendChildren([replyBtn], divBtnWrapper);

        const divReplySection = createElement('div', 'replySection');
        divReplySection.style.display = 'none';
        const input = createElement('input', 'replyInput');
        input.type = 'text';
        input.placeholder = 'Reply to this question here...';
        const sendReplyButton = createElement('button', 'replyButton', 'Send');
        sendReplyButton.addEventListener('click', sendReply);
        const ol = createElement('ol', 'reply');
        ol.type = '1';

        parentAppendChildren([input, sendReplyButton, ol], divReplySection);
        parentAppendChildren([divReplySection], divWrapper);

        elements.pendingField.removeChild(divWrapper);
        elements.openQuestionsField.appendChild(divWrapper);
    }

    function displayReplySection() {
        const divReplySection = this.parentNode.parentNode.lastChild;

        if (this.textContent === 'Reply') {
            this.textContent = 'Back';
            divReplySection.style.display = 'block';
        } else {
            this.textContent = 'Reply';
            divReplySection.style.display = 'none';
        }
    }

    function sendReply() {
        const divReplySection = this.parentNode;
        const input = divReplySection.firstChild;
        const answer = input.value;
        const orderedList = divReplySection.lastChild;

        if (answer) {
            const listItem = createElement('li', '', answer);
            parentAppendChildren([listItem], orderedList);
            input.value = '';
        }
    }

    function createElement(tagName, className, text) {
        const element = document.createElement(tagName);

        if (className) {
            element.className = className;
        }

        if (text) {
            element.textContent = text;
        }

        return element;
    }

    function createImgElement(src, width, height) {
        const img = document.createElement('img');
        img.src = src;
        img.width = width;
        img.height = height;
        return img;
    }

    function parentAppendChildren(childrenCollection, parent) {
        childrenCollection.forEach(ch => {
            parent.appendChild(ch);
        });
    }
}