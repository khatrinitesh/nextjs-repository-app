"use client"
import Link from "next/link";
import { useEffect,useState } from "react";

const CustomApp = () => {
    const [listdata,setListdata] = useState([])

    const baseurl = 'https://api.jikan.moe/v4/anime?q=naruto'

        const fetchData = async () => {
            try{    
                const response = await fetch(baseurl)
                const result = await response.json()
                setListdata(result.data)
                console.log(result)
            }
            catch(error){
                console.error('error',error)
            }
        }

        useEffect(() => {
            fetchData()
        },[])

  return (
    <div>
        {listdata.map((val,index) => {
            return(
                <div key={index}>
                    <h3>{val.mal_id}</h3>
                    <a href={val.url}>{val.url}</a>
                    <h3>JPG</h3>
                    <img src={val?.images?.jpg?.image_url} alt={`Image for ${val.title}`} />
                    <img src={val?.images?.jpg?.small_image_url} alt={`Image for ${val.title}`} />
                    <img src={val?.images?.jpg?.large_image_url} alt={`Image for ${val.title}`} />
                    <h3>webp</h3>
                    <img src={val?.images?.webp?.image_url} alt={`Image for ${val.title}`} />
                    <img src={val?.images?.webp?.small_image_url} alt={`Image for ${val.title}`} />
                    <img src={val?.images?.webp?.large_image_url} alt={`Image for ${val.title}`} />
                    <p>{val?.trailer?.youtube_id}</p>
                    <p>{val?.titles?.type}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CustomApp
