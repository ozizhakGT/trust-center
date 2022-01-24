export const types = {
    SET_CLIENT: '[CLIENT] SET',
    LOGOUT_CLIENT: '[CLIENT] LOGOUT'
}

export default function reducer(state, action) {
    switch (action.type) {
        case types.SET_CLIENT:
            return action.payload
        case types.LOGOUT_CLIENT:
            return null;
        default:
            return state;
    }
}