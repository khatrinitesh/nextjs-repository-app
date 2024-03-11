    "use client";
    import { useEffect, useState } from 'react';
    import { useParams} from 'next/navigation';

    const ProductDetailPage = () => {
       
        const { id } = useParams();
        console.log(id);
    
        const [loading, setLoading] = useState(false);
        const [productDetails, setProductDetails] = useState({});
    
        const baseurl = 'https://jsonplaceholder.typicode.com/users';

        useEffect(() => {
            const fetchDetail = async () => {
                setLoading(true);
                if(id){
                    try {
                        const response = await fetch(`${baseurl}/${id}`);
                        const result = await response.json();
                        console.log(result);
                        setProductDetails(result);
                        setLoading(false);
                    } catch (error) {
                        console.log('error', error);
                        setLoading(false);
                    }
                }
            }
            fetchDetail();
        },[id]);

        if(loading){
            return(
                <p>Loading...</p>
            )
        }
    return (
        <div>
        <h1>Product Details</h1>
        {/* <button onClick={handleBack}>Back</button> */}
        <p>Name: {productDetails?.name}</p>
        <p>Email: {productDetails?.email}</p>
        <p>Phone: {productDetails?.phone}</p>
        </div>
    )
    }

    export default ProductDetailPage
