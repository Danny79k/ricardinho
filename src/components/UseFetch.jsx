import { useState, useEffect, useCallback} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("Ejecutando useFetch:", { data, loading, error });

    const fetchData = useCallback(async ()=>{
        try{
            console.log('nueva llamada a la API')
            const res= await fetch(url);
            if(!res.ok) throw Error('Error al consumir la api')
            const data = await res.json();
            setData(data);
        }catch(error){
            setData([]);
            setError(error.message);
        }finally{
            setLoading(false);
        }

    }, []);

    useEffect(()=>{
        fetchData();
        //console.log('useEffect en useFetch')
    }, []);

    return {data, loading, error}
}

export default useFetch;