import React, { useState, useEffect } from 'react';

const useFetch = () => {
    const [url, setUrl] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (url === "") return;
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false)
                setError(null)
            } catch (error) {
                console.log(error)
                // setError(error);
                setResponse(null);
                setIsLoading(false)
            }
        };
        fetchData()
    }, [url])

    const data = {
        response,
        error,
        isLoading
    }

    return [data, setUrl];
};

export default useFetch