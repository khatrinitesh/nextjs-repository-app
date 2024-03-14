"use client"
import {useState,useEffect} from 'react';


const CustomApp = () => {
    const [listdata,setListdata] = useState([]);
    const baseurl = 'https://www.jcquotes.com/api/quotes/random'


    const btnQuotes = async () => {
        try {
            const response = await fetch(`${baseurl}`)
            const result = await response.json()
            console.log(result)
            setListdata(result)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        btnQuotes()
    },[])

    const {clickToTweetId,rawText,source,text} = listdata
  return (
    <div>
    <button className="bg-red-200" onClick={btnQuotes}>Click quotes random</button>
    <br />
      <strong>clickToTweetId</strong> {clickToTweetId}
      <br />
      <strong>rawText</strong> {rawText}
      <br />
      <strong>source</strong> {source}
      <br />
      <strong>text</strong> {text}
    </div>
  )
}

export default CustomApp

