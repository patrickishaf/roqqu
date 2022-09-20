import { useState, useEffect, useDebugValue } from "react";

const useGetRequest = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const sendGetRequest = async (url, abortController) => {
        try {
            const response = await fetch(url, {
                signal: abortController.signal,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
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
            } else {
                console.log('There has been an error: ', error);
                setError(error);
            }
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        sendGetRequest(url, abortController);
    }, [url]);

    useDebugValue(data);
    useDebugValue(isLoading);
    useDebugValue(error ?? 'no error yet');

    return { data, isLoading, error };
}

export default useGetRequest;