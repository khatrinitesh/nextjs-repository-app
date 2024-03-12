"use client"
import Link from "next/link";
import { useEffect,useState } from "react";

const CustomApp = () => {
    const [listdata,setListdata] = useState([])

    const baseurl = 'https://www.whenisthenextmcufilm.com/api'

        const fetchData = async () => {
            try{    
                const response = await fetch(baseurl)
                const result = await response.json()
                setListdata(result)
                console.log(result)
            }
            catch(error){
                console.error('error',error)
            }
        }

        useEffect(() => {
            fetchData()
        },[])

        const {days_until,following_production} = listdata
  return (
    <div>
      <h3>Days Until: {days_until}</h3>
      {following_production && (
        <div>
          <h4 className="font-bold underline text-[red] text-[30px]">Following Production:</h4>
          <p><strong>Days Until:</strong> {following_production.days_until}</p>
          <p><strong>ID:</strong> {following_production.id}</p>
          <p><strong>Overview:</strong> {following_production.overview}</p>
          <p><strong>Poster URL:</strong> {following_production.poster_url}</p>
          <p><strong>Release Date:</strong> {following_production.release_date}</p>
          <p><strong>Title:</strong> {following_production.title}</p>
          <p><strong>Type:</strong> {following_production.type}</p>
        </div>
      )}
    </div>
  )
}

export default CustomApp
