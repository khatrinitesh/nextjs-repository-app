"use client"
import { useState,useEffect } from "react";
import { useParams } from "next/navigation";

const CustomApp = () => {
    const [listData,setListData] = useState({});
    const [loading,setLoading] = useState(false);
    const [errors,setErrors] = useState('');

    const {id} = useParams();
    console.log(id);

    const baseurl = 'https://finalspaceapi.com/api/v0/episode/'
    const fetchData = async () =>{
        setLoading(true);
        if(id){
            try{
                const response = await fetch(`${baseurl}${id}`)
                const result = await response.json()
                if(!response.ok){
                    throw new Error(`${response.status}`)
                }
                console.log(result)
                setListData(result)
                setLoading(false);
            }
            catch(error){
                setErrors(`Error ${errors}`)
                setLoading(false);
            }
        }
    }

    useEffect(() => {
            fetchData();
    }, [id]);

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
  return (
    <>
            <h1 className="text-[30px] font-bold text-[red] underline">Product details</h1>
      <h3><strong>id:</strong> {listData.id}</h3>
      <h3><strong>name:</strong> {listData.name}</h3>
      <h3><strong>director:</strong> {listData.director}</h3>
      <img src={listData.img_url}/>   
    </>
  )
}

export default CustomApp
