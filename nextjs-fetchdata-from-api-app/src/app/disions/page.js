"use client"
import {useState,useEffect} from 'react';

const CustomApp = () => {

    //state to hold the dispaly items 
    const [displaylist,setDisplaylist] = useState([]);
    const [listdata,setListData] = useState([]);
    const handleSlice = () => {
        setDisplaylist(listdata.slice(0,4));
    }
    const baseurl = 'https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api/US.json'
    const token = '42868803-6699575339cf190e2dbba8c4f'

    const fetchData = async () => {
        try{
            const response = await fetch(`${baseurl}`,{
                // method: 'GET', // This is optional since GET is the default method
                // headers: {
                //     'Authorization':`${token}`
                // }
            });
            const result = await response.json()
            console.log(result)
            setListData(result)
        }
        catch(error){
            console.log('error',error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        
      <button className="bg-[red]" onClick={handleSlice}>CLick me</button>
      {displaylist.map((val,index) => {
        return(
            <div key={index}>{val}</div>
        )
      })}
      
    </div>
  )
}

export default CustomApp
