"use client";
import { useEffect, useState } from "react";

const CustomApp = () => {
    const [listdata, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedOption,setSelectedOption] = useState('');
    const [error, setError] = useState("");

    const baseurl = "https://date.nager.at/api/v2/publicholidays/2020/US";
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(baseurl);
        if (!response.ok) {
          throw new Error(`Http status error,${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setListData(result);
        setLoading(false);
      } catch (error) {
        setError(`Error ${error}`);
        setLoading(false);
      }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }


    if (loading) {
        return <div>Loading...</div>;
      }
      if(error){
          return <div>{error.message}</div>
      }
      return (
        <>
          <div className="container mx-auto">
             {listdata.map((val,index) => {
                const {data,localName,name,countryCode,fixed,global,counties,launchYear,type} = val;
              return(
                  <div key={index} className="bg-[powderblue] mb-[10px] p-[10px] rounded-[10px]">
                      <h3><strong>data</strong> {data}</h3>
                      <h3><strong>localName:</strong> {localName}</h3>
                      <h3><strong>name:</strong> {name}</h3>
                      <h3><strong>countryCode:</strong> {countryCode}</h3>
                      <h3>{fixed && <strong>fixed:</strong>} {fixed}</h3>
                      <h3>{global && <strong>global:</strong>} {global}</h3>
                      <h3><strong>countries:</strong> {counties}</h3>
                      <h3><strong>launchYear:</strong> {launchYear}</h3>
                      <h3><strong>type:</strong> {type}</h3>
                  </div>
              )
             })}

             <hr/>
             <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    <option value="">Select an option</option>
                    {listdata.map((option) => (
                    <option key={option.id} value={option.name} >
                        {option.localName}
                    </option>
                    ))}
                </select>
                <p>Selected Option: {selectedOption}</p>
          </div>
        </>
      );
}

export default CustomApp
