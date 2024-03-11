"use client";
import { useEffect, useState } from "react";

const CustomApp = () => {
  const [dataCat, setDataCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseurl = "https://api.artic.edu/api/v1/artworks/search?q=cats";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error(`Hrttp status error,${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setDataCat(result.data);
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
  return (
    <>
      <div className="container">
        <h3 className="font-bold text-[30px]">{dataCat.length}</h3>
        {dataCat.map((val, index) => {
          const {
            thumbnail: { alt_text, width, lqip, height },
            api_model,
          } = val;
          return (
            <div key={index} className="bg-[powderblue] mb-[20px] p-[20px]">
              <strong>thumbnail</strong>: {alt_text} <br />
              <strong>width</strong>: {width} <br />
              <strong>lqip</strong>: <img src={lqip} /> <br />
              <strong>height</strong>: {height} <br />
              <strong>api_model</strong>: {api_model}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomApp;
