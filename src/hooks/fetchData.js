import {useState, useEffect}from 'react'
import axios from  "axios";

export default function useFetchData(api, params) {
    const [data, setShows] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTv = async () => {
          try {
            setIsLoading(true);
            const res = await axios.get(api,params
            );
            setShows(res.data);
          } catch (error) {
            console.log(error);
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
        fetchTv();
      }, [api, params]);
  return {data, error, isLoading};}


  
