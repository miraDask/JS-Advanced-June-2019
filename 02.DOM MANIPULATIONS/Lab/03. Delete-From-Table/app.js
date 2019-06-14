function deleteByEmail() {
    const SELECTORS = {
        EMAIL: 'input[name=\'email\']',
        OUTPUT: '#result',
        TABLE_HEAD_ROWS: 'thead tr',
        EMAIL_TR_TEXT: 'Email'
    };

    const NOTIFICATIONS = {
        SUCCESS: 'Deleted.',
        ERROR: 'Not found.'
    };

    const emailsReg = (function () {
        let emails = {};
        const emailIndex = [...document.querySelector(SELECTORS.TABLE_HEAD_ROWS).children]
            .find(td => td.textContent === SELECTORS.EMAIL_TR_TEXT).cellIndex;

        [...document.querySelectorAll('tbody tr')].forEach(tr => {
            let emailElement = tr.children[emailIndex];
            emails[emailElement.textContent] = tr;
        });
        return emails;
    })();

    const email = document.querySelector(SELECTORS.EMAIL).value;
    const output = document.querySelector(SELECTORS.OUTPUT);

    function handleOutput(message) {
        output.textContent = message;
    }

    const rowToRemove = emailsReg[email];
    if (rowToRemove) {
        rowToRemove.remove();
        handleOutput(NOTIFICATIONS.SUCCESS);
    } else {
        handleOutput(NOTIFICATIONS.ERROR);
    }
}