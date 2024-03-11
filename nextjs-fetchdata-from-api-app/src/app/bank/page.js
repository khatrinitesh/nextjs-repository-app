"use client";
import { useEffect, useState } from "react";

const CustomApp = () => {
    const [listdata, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const baseurl = "https://www.gov.uk/bank-holidays.json";
  
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


    if (loading) {
        return <div>Loading...</div>;
      }
      if(error){
          return <div>{error.message}</div>
      }
      return (
        <>
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
            {/* data map > england and wales */}
            {listdata['england-and-wales'] && (
                <div>
                    <h2 className="underline underline-offset-[8px] font-bold text-[34px]">England and wales</h2>
                    <ul>
                        {listdata['england-and-wales'].events.map((event,index) => {
                            return(
                                <li key={index}>
                                    {event.date} - <strong>{event.title}</strong>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            )}

            {/* data map > scotland */}
            {listdata.scotland && (
                <div>
                    <h2 className="underline underline-offset-[8px] font-bold text-[34px]">Scotland</h2>
                    <ul>
                        {listdata.scotland.events.map((event,index) => {
                            return(
                                <li key={index}>
                                    {event.date} - <strong>{event.title}</strong>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

            {/* data map > northern-ireland */}
            {listdata["northern-ireland"] && (
                <div>
                    <h2 className="underline underline-offset-[8px] font-bold text-[34px]">Northern Ireland</h2>
                    <ul>
                        {listdata["northern-ireland"].events.map((event,index) => {
                            return(
                                <li key={index}>
                                    {event.date} - <strong>{event.title}</strong>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
            </div>
          </div>
        </>
      );
}

export default CustomApp
