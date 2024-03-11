"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const CustomApp = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [serviceData, setServiceData] = useState([]);

  const baseurl = "https://api.publicapis.org/entries";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(baseurl);
        const result = await response.json();
        setServiceData(result.entries);
        console.log(result);
        setLoading(false);
      } catch (errors) {
        setErrors("Error", errors);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>APIs.guru</h2>
      {serviceData.length}
      {serviceData.length > 0 &&
        serviceData.map((val, index) => {
          return (
            <div key={index}>
              {val.Description}
              <Link href={val.Link} target="_blank">
                Click link
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CustomApp;
