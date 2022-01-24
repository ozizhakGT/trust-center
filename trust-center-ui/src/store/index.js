import {createContext, useReducer} from "react";
import reducers from '../reducers';

export const GlobalContext = createContext(null);

export default function Provider({ children }) {
    const client = useReducer(reducers.clients, null);

    return (
        <GlobalContext.Provider value={{ client }}>
            {children}
        </GlobalContext.Provider>
    )
}