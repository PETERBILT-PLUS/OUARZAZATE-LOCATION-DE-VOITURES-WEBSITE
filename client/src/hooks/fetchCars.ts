import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export const useFetchCars = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res: AxiosResponse<any, any> = await axios.get("https://ouarzazate-location-de-voitures-website.onrender.com/api/cars?populate=*");
                console.log(res.data);
                setData(res.data.data);
                setLoading(false);
            } catch (err: any) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};