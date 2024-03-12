"use client"
import Link from "next/link";
import { useEffect,useState } from "react";

const CustomApp = () => {
    const [listdata,setListdata] = useState([])

    const baseurl = 'https://anapioficeandfire.com/api/characters/581'

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


        const {url,name,gender,allegiances,books} = listdata
  return (
    <div>
        <a href={url}>{url}</a>
        <h3>{name}</h3>
        <h3>{gender}</h3>
        <h3>{allegiances}</h3>
        <h3>{books}</h3>
    </div>
  )
}

export default CustomApp
