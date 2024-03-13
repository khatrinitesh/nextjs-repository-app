"use client"
import Link from "next/link";
import { useState,useEffect } from "react"

const CustomApp = () => {
    const [listData,setListData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errors,setErrors] = useState('');

    const baseurl = 'https://api.spacexdata.com/v3/cores'

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try{
                const response = await fetch(baseurl)
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
        fetchData()
    },[])

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
    <div>
      <h1>Final Space Episodes</h1>
      <ul>
        {listData.map((val,index) => {
            const {core_serial} = val
            return(
                <>
                <Link key={index} href={`/cores/${core_serial}`}><strong>view details</strong></Link>
                <br />
                </>
            )
        })}
      </ul>
    </div>
  )
}

export default CustomApp
