function validateHTTPRequest(httpObject) {
    const VALIDATOR = {
        method: {
            label: 'Method',
            names: ['GET', 'POST', 'DELETE', 'CONNECT']
        },
        uri: {
            label: 'URI',
            pattern: /^[a-z\d.*]*$/,
        },
        version: {
            label: 'Version',
            names: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
        },
        message: {
            label: 'Message',
            pattern: /^[^<>\\&'"]+$/
        }
    }

    const errorMessage = 'Invalid request header: Invalid ';

    const validateMethod = () => {
        if (!httpObject.hasOwnProperty('method') ||
            !VALIDATOR.method.names.includes(httpObject.method)) {
            throw new Error(errorMessage + VALIDATOR.method.label);
        }
    }

    const validateURI = () => {
        if (!httpObject.hasOwnProperty('uri') ||
            httpObject.uri === '' ||
            !httpObject.uri.match(VALIDATOR.uri.pattern)) {
            throw new Error(errorMessage + VALIDATOR.uri.label);
        }
    }

    const validateVersion = () => {
        if (!httpObject.hasOwnProperty('version') ||
            !VALIDATOR.version.names.includes(httpObject.version)) {
            throw new Error(errorMessage + VALIDATOR.version.label);
        }
    }

    const validateMessage = () => {
        if (httpObject.message === '') {
            return;
        }

        if (!httpObject.hasOwnProperty('message') ||
            !httpObject.message.match(VALIDATOR.message.pattern)) {
            throw new Error(errorMessage + VALIDATOR.message.label);
        }
    }

    validateMethod();
    validateURI();
    validateVersion();
    validateMessage();
    return httpObject;
}
//test:
// console.log(validateHTTPRequest({
//     method: 'GET',
//     uri: '',
//     version: 'HTTP/0.8',
//     message: ''
// }));