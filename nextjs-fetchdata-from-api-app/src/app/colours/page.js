"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CustomApp = () => {
    const [dataColours, setDataColours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    
  
    const baseurl = "https://shibe.online/api/shibes?count=10";
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(baseurl);
        if (!response.ok) {
          throw new Error(`Http status error,${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setDataColours(result);
        setLoading(false);
      } catch (error) {
        setError(`Error ${error}`);
        setLoading(false);
      }
    };
    useEffect(() => {
        fetchData();
    }, []);

    

    const btnDel = (index) => {
        const newData = [...dataColours]
        newData.splice(index,1)
        setDataColours(newData)
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if(error){
        return <div>{error.message}</div>
    }
    return (
      <>
        <div className="container">
           {dataColours.map((val,index) => {
            return(
                <div key={index}>
                    <img src={val} className=""/>
                    <button onClick={() => btnDel(index)}>Delete</button>
                </div>
            )
           })}
           
         {/* {dataColours.map((val,index) => {
            const {id} =val
            return(
                <Link key={index} href={`/colours/${id}`}>View details</Link>
            )
         })} */}
        </div>
      </>
    );
  };
  
  export default CustomApp;
