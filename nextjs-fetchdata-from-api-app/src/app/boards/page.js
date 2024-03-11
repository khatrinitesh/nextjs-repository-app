"use client";
import { useEffect, useState } from "react";

const CustomApp = () => {
    const [listdata, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const baseurl = "https://chroniclingamerica.loc.gov/newspapers.json";
  
    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(baseurl);
          if (!response.ok) {
            throw new Error(`Hrttp status error,${response.status}`);
          }
          const result = await response.json();
         // Check the structure of the API response
    console.log(result?.data?.newspapers);

    setListData(result?.data?.newspapers);
    setLoading(false);
        } catch (error) {
          setError(`Error`, error);
          setLoading(true);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);


    if (loading) {
        return <div>Loading...</div>;
      }
      if(error){
          return <div>{error.message}</div>
      }
      return (
        <>
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">asdsad
            {listdata.map((val,index) => {
                return(
                    <div key={index}>{val.state}</div>
                )
            })}
            </div>
          </div>
        </>
      );
}

export default CustomApp
