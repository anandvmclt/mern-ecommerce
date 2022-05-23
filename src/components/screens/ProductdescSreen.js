import React from 'react'
import products from '../../products.js';

function ProductdescSreen({match}) {
    const productId = match.params.id
  return (
    <div>
        <h1> Product Description page </h1>
        <h2> The product Id is : {productId} </h2>

        </div>
  )
}

export default ProductdescSreen 