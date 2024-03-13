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

    const baseurl = 'https://api.spacexdata.com/v3/capsules'

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

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(errors){
        return(
            <div>{errors.message}</div>
        )
    }

    const {landings,details} = listData
  return (
    <div>
        <button onClick={btnBack}>Back</button>
      <h1>Final Space Episodes</h1>
      <h3>{landings}</h3>
      <h3>{details}</h3>
    </div>
  )
}

export default CustomApp
