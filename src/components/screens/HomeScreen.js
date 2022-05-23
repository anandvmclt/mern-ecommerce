import React from 'react'
import products from '../../products.js'
import Product from '../Product'

function HomeScreen() {
    return (
        <div>
            <div className='row'>
                {products.map(product => {
                    return  <Product product={product} />
                    
                })}
            </div>
        </div>
    )
}

export default HomeScreen 