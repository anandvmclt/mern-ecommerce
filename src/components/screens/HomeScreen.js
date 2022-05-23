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
                    return <div className='col-md-3 m-3 card p-2 ' key={index} >
                    <Product product={product}  />
                    </div>
                    
                }))}
            </div>
    )
}

export default HomeScreen 