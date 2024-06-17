import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const useFetchCars = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res: AxiosResponse<any, any> = await axios.get("http://localhost:1337/api/cars?populate=*");
                setData(res.data.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};