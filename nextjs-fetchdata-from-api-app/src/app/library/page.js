"use client"
import { useState,useEffect } from 'react'

const page = () => {
    const [listdata,setListdata] = useState([]);

    const baseurl = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseurl)
                if(!response.ok){
                    throw new Error(`sorrysomethng went wrong ${response.status}`)
                }
                const result = await response.json()
                setListdata(result?.docs)
                console.log(result?.docs)
            }
            catch(error){
                console.log('error',error)
            }
        }
        fetchData();
        
    },[])
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {listdata.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <h3>{book.title_suggest}</h3>
            <h3>{book.type}</h3>
            <h3>{book.id_librarything}</h3>
            {/* Add more information based on your data structure */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
