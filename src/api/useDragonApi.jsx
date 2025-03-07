import { useState, useEffect } from "react";


const useDragonApi = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paginationLinks, setPaginationLinks] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);
                if(!response.ok) throw new Error("Fetch failed");
                const data = await response.json();
                setData(data.items);
                setPaginationLinks(data.links);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint]);

    return { data, loading, error, paginationLinks };
}

export default useDragonApi;