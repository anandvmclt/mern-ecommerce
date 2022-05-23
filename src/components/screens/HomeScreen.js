import React from 'react'
import Product from '../Product'
import axios from 'axios'
import { useEffect, useState } from 'react'

function HomeScreen() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products/getallproducts').then(res => {
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
            <div className='row justify-content-center'>

                {products.length && (products.map((product,index) => {
                    return <Product product={product} key={index} />
                    
                }))}
            </div>
    )
}

export default HomeScreen 