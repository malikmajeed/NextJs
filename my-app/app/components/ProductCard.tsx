// 'use client' //if not use the click event will generate error because the component is server side rendered.

import React from 'react'
import AddToCart from './AddToCart'


const ProductCard = () => {
  return (
    <div>
      {/* <button onClick={()=>console.log("This will give error if its not client sidei-e: use 'use client' directive on top to make this client ")}> Add to Cart</button> */}
   {/* Now to make the button only as client side 
   and the rest server side we need to move this button to a seaprate component */}
   <AddToCart /> {/* Now this button is only client side*/}
    </div>
  )
}

export default ProductCard
