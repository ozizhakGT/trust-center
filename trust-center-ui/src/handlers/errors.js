import { types } from "../reducers/client";

export default function goTo(dispatch, navigate, route='/login') {
    debugger
    dispatch({ type: types.LOGOUT_CLIENT });

    navigate(`/${route}`);
}