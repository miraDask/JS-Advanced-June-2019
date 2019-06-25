class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(value) {
        const idPattern = /^[0-9]{6}$/;
        const match = value.match(idPattern);
        if (!match) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get clientId() {
        return this._clientId;
    }

    set email(value) {
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/;
        const match = value.match(emailPattern);
        if (!match) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get email() {
        return this._email;
    }

    set firstName(value) {
        this._validateName(value, 'First');
        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._validateName(value, 'Last');
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    _validateName(name, nameType) {
        const namePattern = /^[a-zA-Z]{3,20}$/;
        const match = name.match(namePattern);

        function invalidCharactersErrorThrow(nameType) {
            throw new TypeError(`${nameType} name must contain only Latin characters`)
        }

        function lengthCheck(text, nameType) {
            if (text.length < 3 || text.length > 20) {
                throw new TypeError(`${nameType} name must be between 3 and 20 characters long`);
            }
        }

        if (!match) {
            lengthCheck(name, nameType);
            invalidCharactersErrorThrow(nameType);
        }
    }
}