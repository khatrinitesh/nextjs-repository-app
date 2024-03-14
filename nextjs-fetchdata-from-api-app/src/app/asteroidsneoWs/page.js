"use client"
import {useState,useEffect} from 'react';

const CustomApp = () => {
    const [listdata,setListdata] = useState([]);
    const [error,setError] = useState('');

    const baseUrl = 'https://api.nasa.gov/neo/rest/v1/feed'
    const apiKey = 'ggWvK9B9LwH1XT12I0uls2DcTZFowY6nlguKb7cT'

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}?start_date=2023-03-10&end_date=2023-03-17&api_key=${apiKey}`)
            if(!response.ok){
                throw new Error(`Http ${response.status}`)
            }
            const result = await response.json()
            const resultAllNeos = (Object.values(result.near_earth_objects).flat()); 
            console.log(resultAllNeos)
            setListdata(resultAllNeos)
        } catch (error) {
            console.error(`Error,${error}`)
            setError(`Error,${error.message}`)
        }
    }   
    useEffect(() => {
        fetchData()
    },[])

    const btnDel = (id) => {
        const updatedData = listdata.filter((val) => val.id !== id)
        setListdata(updatedData)
    }

    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <div>
      {listdata.map((neo) => (
            <div key={neo.id} className="mb-3">
                <h3><strong>name:</strong> {neo.name}</h3>
                <p><strong>Close Approach Date:</strong>  {neo.close_approach_data[0].close_approach_date}</p>
                <p><strong>Estimated Diameter (meters):</strong>  Min: {neo.estimated_diameter.meters.estimated_diameter_min} - Max: {neo.estimated_diameter.meters.estimated_diameter_max}</p>
                <p><strong>Potentially Hazardous:</strong> {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
                <button onClick={() => btnDel(neo.id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default CustomApp
