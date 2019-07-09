// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {

    const btn = document.querySelector('button');
    const textArea = document.querySelector('section#inputSection textarea');
    const usernameArea = document.querySelector('input[type="username"]');
    const pendingField = document.getElementById('pendingQuestions');
    const openQuestionsField = document.getElementById('openQuestions');


    const handleClickEvent = () => {
        const text = textArea.value;

        if (text) {
            const username = usernameArea.value ? usernameArea.value : 'Anonymous';

            const openQuestions = function () {
                const div = document.createElement('div');
                div.className = 'openQuestion';

                const img = document.createElement('img');
                img.src = "./images/user.png";
                img.width = '32';
                img.height = '32';
                div.appendChild(img);

                const span = document.createElement('span');
                span.textContent = `${username}`;
                div.appendChild(span);

                const p = document.createElement('p');
                p.textContent = `${text}`;
                div.appendChild(p);

                const div2 = document.createElement('div');
                div2.className = 'actions';
                const replyBtn = document.createElement('button');
                replyBtn.className = 'reply';
                replyBtn.textContent = 'Reply';
                replyBtn.addEventListener('click', replay)
                div2.appendChild(replyBtn);
                div.appendChild(div2);

                const div3 = document.createElement('div');
                div3.className = 'replySection';
                div3.style.display = 'none';
                const input = document.createElement('input');
                input.className = 'replyInput';
                input.type = 'text';
                input.placeholder = 'Reply to this question here...';
                div3.appendChild(input);
                const replyButton = document.createElement('button');
                replyButton.className = 'replyButton';
                replyButton.textContent = 'Send';
                div3.appendChild(replyButton);
                const ol = document.createElement('ol');
                ol.className = 'reply';
                ol.type = '1';
                div3.appendChild(ol);
                div.appendChild(div3);
                openQuestionsField.appendChild(div);

                this.parentNode.parentNode.remove();

                function replay() {
                    if (this.textContent === 'Reply') {
                        div3.style.display = 'block';
                        this.textContent = 'Back';

                        replyButton.addEventListener('click', () => {
                            const answer = input.value;

                            if (answer) {
                                const li = document.createElement('li');
                                li.textContent = answer;
                                ol.appendChild(li);
                                input.value = '';
                            }
                        });
                    } else {
                        div3.style.display = 'none';
                        this.textContent = 'Reply';
                       // input.value = '';
                    }
                }
            }

            const div = document.createElement('div');
            div.className = 'pendingQuestion';
            const img = document.createElement('img');
            img.src = "./images/user.png";
            img.width = '32';
            img.height = '32';
            div.appendChild(img);

            const span = document.createElement('span');
            span.textContent = `${username}`;
            div.appendChild(span);

            const p = document.createElement('p');
            p.textContent = `${text}`;
            div.appendChild(p);

            const div2 = document.createElement('div');
            div2.className = 'actions';

            const archiveBtn = document.createElement('button');
            archiveBtn.className = 'archive';
            archiveBtn.textContent = 'Archive';
            div2.appendChild(archiveBtn);
            const openBtn = document.createElement('button');
            openBtn.className = 'open';
            openBtn.textContent = 'Open';
            div2.appendChild(openBtn);
            div.appendChild(div2);
            pendingField.appendChild(div);

            archiveBtn.addEventListener('click', function () {
                div.remove();
            });

            openBtn.addEventListener('click', openQuestions);

            textArea.value = '';
            usernameArea.value = '';
        }
    }

    btn.addEventListener('click', handleClickEvent);

}
// To check out your solution, just submit mySolution() function in judge system.