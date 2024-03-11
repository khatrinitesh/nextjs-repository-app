"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductListPage = () => {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [products,setProducts] = useState([]);

    const baseurl = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch(baseurl)
                const result = await response.json();
                if(!response.ok){
                    throw new Error('sorry something went wrong')
                }
                console.log(result)
                setProducts(result)
            }
            catch(error){
                console.error('Error fetching product list:',error);
                setError('error message failed')
            }
            finally{
                setLoading(false);
            }
        }

        fetchProducts()
    },[])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((val,index) => {
            const {id,name}  = val;
            return(
                <li key={index}>
                    <Link href={`../product/${id}`}>{name}</Link>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default ProductListPage
