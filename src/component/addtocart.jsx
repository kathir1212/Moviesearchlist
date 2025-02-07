import React, { useState } from 'react'
import { useCart } from '../Context/productContext'; // Assuming correct import path for the context



function Addtocart() {

    const { cart , removeFromCart , total } = useCart();

    
  
   
     
    

  return (
    <div className="p-15 md:p-5 space-y-4 px-[15%]">
    {cart.map((item, index) => {
     
                 return (
                   <div key={index} className="flex items-center justify-between">
                     <div>
                       <p className="font-medium">{item.title}</p>
                       <p className="text-gray-600">Rs.{item.price}</p>
                     </div>
                     <button onClick={() => {
                       removeFromCart(item,index)
                     }} className="text-red-500 hover:text-red-700">
                       Remove
                     </button>
                   </div>
                  );
               })}  

<div  className="flex items-center justify-between">
                     <div>
                       <h1 className="font-medium">Discount </h1>
                       
                     </div>
                    <div>
                    <h1 className="text-gray-600">10%</h1>
                    </div>
                   </div>

<div>
        
                 

                  <div  className="flex items-center justify-between">
                     <div>
                       <h1 className="font-medium">Total Price </h1>
                       
                     </div>
                    <div>
                    <h1 className="text-gray-600">{total}</h1>

                    </div>
                   </div>
                 </div>
                 </div>

                
  )
}

export default Addtocart