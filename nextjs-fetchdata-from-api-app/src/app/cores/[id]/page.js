"use client"
import { useState,useEffect } from "react";
import { useRouter,useParams } from "next/navigation";

const CustomApp = () => {
    const [listData,setListData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errors,setErrors] = useState('');

    const router =useRouter();

    const {id} = useParams();
    console.log(id);

    const baseurl = 'https://api.spacexdata.com/v3/cores'

    const btnBack = () => {
        router.back()
    }

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            if(id){
                try{
                    const response = await fetch(`${baseurl}/${id}`)
                    const result = await response.json()
                    console.log(result.data)
                    setListData(result)
                    setLoading(false);
                }
                catch(error){
                    setErrors(`Error ${errors}`)
                    setLoading(false);
                }
            }
        }
        fetchData();
    },[id])

    if (loading) {
        return <div>Loading...</div>;
      }
      if (errors) {
        return <div>Error: {errors}</div>;
      }
      if (!listData) {
        return <div>No data found</div>; // Handle case where listData is null
      }
    
  // Now we can safely destructure
  const { core_serial,original_launch, original_launch_unix } = listData;
    
  return (
    <div>
        <button onClick={btnBack} className="bg-[orange] px-[10px] py-[5px]">Back</button>
        <h3>Core Serial: <strong>{core_serial}</strong></h3>
        <h3>Original Launch: {original_launch}</h3>
        <h3>Original Launch Unix: {original_launch_unix}</h3>
    </div>
  )
}

export default CustomApp
