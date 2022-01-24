import { useEffect, useState } from "react";
import { getClientPropAPIRate } from "../api/client";

export default function usePropAPI(obj) {
    const [prop, setProp] = useState(obj);

    useEffect(() => {
        prop.api && getClientPropAPIRate(prop.api)
            .then(({ data }) => setProp({ ...prop, apiAnswer: data }));
    }, [obj]);

    return prop;
}