import {useState} from "react";

const URL = 'https://content.viaplay.se/pc-se/serier/samtliga';
/**
 * Hook to fetch movie series
 */
const useSeries = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchSeries(){
        setError(null);
        setLoading(true);
        try{
            const response = await fetch(URL);
            const data = await response.json();
            window.data = data;
            setResponse(data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']);
            setLoading(false);
        } catch(e){
            setError(`${e.status}: ${e.statusText}`);
            setLoading(false);
        }
    }
    return [response, loading, error, fetchSeries];
}

export default useSeries;