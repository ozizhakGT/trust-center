const CLIENT = {
    NOT_FOUND: {
        CODE: '404',
        MESSAGE: 'client not found'
    },
    BAD_REQUEST: {
        CODE: '400',
        MESSAGE: 'bad request'
    }
};

const INTERNAL_SERVER_ERROR = {
    CODE: 500,
    MESSAGE: 'internal server error'
}

module.exports = {
    CLIENT,
    INTERNAL_SERVER_ERROR
}