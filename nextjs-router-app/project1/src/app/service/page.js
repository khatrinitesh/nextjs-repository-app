"use client"
import Banner from "@/components/banner";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";

const Service = () => {
  const router = useRouter();

  const btnBack = () => {
    router.push("/about")
  }

  const [listdata,setListData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [errors,setErrors] = useState('');

const baseurl = 'https://hacker-news.firebaseio.com/v0/item/8863.json'
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(baseurl)
        if(!response.ok){
          throw new Error(`Error ${response.status}`)
        }
        const result = await response.json()
        console.log(result);
        setListData(result);
        setLoading(false);
      }
      catch(error){
        setErrors(`Error ${errors.message}`)
        setLoading(false);
      }
    }
    fetchData()
  },[]);

  if(loading){
    return <div>Loading...</div>
  }
  if(errors){
    return <div>{errors.message}</div>
  }
  const { id, title, by, descendants, score, time, type,url } = listdata;

  return (
    <div className="mainContent">
      <Banner bannerStyle='text-[red]' title="Service" desc="Anim commodo qui amet laboris nisi amet consectetur aliqua sit et dolore."/>
      <button onClick={btnBack}>Go Back</button>
      <div>
        <h3>{id} - {title}</h3>
        <p>Author: {by}</p>
        <p>Score: {score}</p>
        <p>Time: {new Date(time * 1000).toLocaleString()}</p>
        <p>URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
        <p>Descendants: {descendants}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  )
}

export default Service
