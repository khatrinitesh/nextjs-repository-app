"use client"
import {useState,useEffect} from 'react';

const CustomApp = () => {

    const [listdata,setListdata] = useState([]);

    const baseUrl = 'https://api.pexels.com/v1/search?query=people'
    const token = 'A6klweMzmOZwMlZn0udDwPKQ0h6G1yOAZQ3bFpSoIVFMtkwumW27FSxc'

    const fetchData = async () => {
        try {
            const response = await fetch(baseUrl, {
                method: 'GET', // This is optional since GET is the default method
                headers: {
                    'Authorization': token
                }
            });
            if(!response.ok){
                throw new Error(`sorry something went wrong ${response.status}`)
            }
            const result = await response.json();
            console.log(result.photos);
            setListdata(result.photos); // Fixed the function name here
        } catch (error) {
            console.error('error', error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        {listdata.map(({id,width, height, src, photographer, photographer_url, avg_color,src:{original} },index) => {
            return(
                <div key={index}>
                    <h3><strong>id:</strong> {id}</h3>
                    <span><strong>width:</strong> {width}</span>
                    <br />
                    <span><strong>height:</strong> {height}</span>
                    <br />
                    <img src={src.medium} alt={`By ${photographer}`} /> {/* Now directly using destructured properties */}
                    <br />
                    <span><strong>photographer:</strong> {photographer}</span>
                    <br />
                    <span><strong>photographer_url:</strong> {photographer_url}</span>
                    <br />
                    <span><strong>avg_color:</strong> {avg_color}</span>
                    <br />
                    <h2>Big Original</h2>
                    <img src={original} alt={`By ${photographer}`} /> {/* Now directly using destructured properties */}
                    <br />
                </div>
            )
        })}
    </div>
  )
}

export default CustomApp
