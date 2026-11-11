import { useEffect, useState } from "react";
import API from "../API/API";

const useLoad = (loadEndpoint) => {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadRecords = async (endpoint) => {
        const res = await API.get(endpoint);
        if (res.isSuccess) setRecords(res.result);
        setIsLoading(false);
    };

    useEffect(() => {
        loadRecords(loadEndpoint);
    }, []);

    return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
