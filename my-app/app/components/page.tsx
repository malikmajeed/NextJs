'use client' //if not use the click event will generate error because the component is server side rendered.

import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <button onClick={()=>console.log("This will give error if its not client sidei-e: use 'use client' directive on top to make this client ")}> Add to Cart</button>
    </div>
  )
}

export default ProductCard
