import { useState, useEffect, useDebugValue } from "react";

const useHttpRequest = (url, {
    headers,
    body,
    method = 'GET',
 }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const sendHttpRequest = async (url, abortController) => {
        try {
            const response = await fetch(url, {
                signal: abortController.signal,
                method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    ...headers
                },
                body: JSON.stringify(body) || null,
            });
            const data = await response.json();
            const responseModel = data;
            setIsLoading(false);
            setData(responseModel);
            setError(undefined);
        } catch (error) {
            setIsLoading(false);
            if (error.name !== 'AbortError') {
                setError(error);
            }
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        sendHttpRequest(url, abortController);
    }, [url, headers, body, method]);

    useDebugValue(data);
    useDebugValue(isLoading);
    useDebugValue(error ?? 'no error yet');

    return { data, isLoading, error };
}

export default useHttpRequest;