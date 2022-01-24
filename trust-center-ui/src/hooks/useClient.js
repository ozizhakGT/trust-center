import {useContext, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { getClient } from "../api/client";
import {GlobalContext} from "../store";
import errorsHandler from '../handlers/errors';
import {types} from "../reducers/client";

export default function useClient(companyName) {
    const navigate = useNavigate();
    const { client: [_, dispatchClient] } = useContext(GlobalContext);
    const [hasSent, setHasSent] = useState(true);

    useEffect(() => {
        if (!companyName) return;

        let timerId = 0;
        if (hasSent) {
            timerId = setTimeout(() => {
                getClient(companyName)
                .then(res => {
                    dispatchClient({ type: types.SET_CLIENT, payload: res.data[0]})
                }).catch(({ response }) => {
                    setHasSent(false);
                    errorsHandler(dispatchClient, navigate, response.status);
                });
            }, (3000));
        }
        return () => {
            clearTimeout(timerId);
        };
    });

    return {isValid: hasSent};
}