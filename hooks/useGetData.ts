import { useCallback, useState } from "react";
import { Methods } from "../enums/methods.enum";
import axios from "axios";
import { Articles } from "../interfaces/NewsData";

const useGetData = (url: string, method: Methods = Methods.GET, body: object = {}) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fullUrl = process.env.EXPO_PUBLIC_BASE_URL + url
            
            const response = await axios({
                method: method,
                url: fullUrl,
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": process.env.EXPO_PUBLIC_API_KEY
                },
            });
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [url, method, body]);

    return { data, error, loading, refetch: fetchData };
}

export default useGetData;