"use client";
import { useEffect, useState } from "react";

const CustomApp = () => {
    const [dataColours, setDataColours] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const baseurl = "https://random.dog/woof.json";
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(baseurl);
        if (!response.ok) {
          throw new Error(`Hrttp status error,${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setDataCat(result);
        setLoading(false);
      } catch (error) {
        setError(`Error`, error);
        setLoading(true);
      }
    };
    useEffect(() => {
        if(id){
        fetchData();
        }
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if(error){
        return <div>{error.message}</div>
    }
    return (
      <>
        <h2>Product Details</h2>
        <div className="container">
        <img src={dataColours.url}/>
        </div>
      </>
    );
  };
  
  export default CustomApp;
