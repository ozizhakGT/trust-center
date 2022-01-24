const { INTERNAL_SERVER_ERROR } = require('../enums/errors');

function errorsHandler() {
    const error = new Error('');

    return (code = INTERNAL_SERVER_ERROR.CODE, message = INTERNAL_SERVER_ERROR.MESSAGE) => {
        error.code = code;
        error.textMessage = message;

        return error;
    }
}

module.exports = errorsHandler();