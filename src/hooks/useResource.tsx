import React, {useEffect, useState} from "react";

// @ts-ignore
export function useResource(api) {
    const [data, setData] = useState(null);
    const refreshResource = async () => {
        setData(null);
        setData(await api)
    };
    // @ts-ignore
    useEffect(refreshResource, []);
    return { data, refreshResource }
};