import React from 'react'
import { useEffect } from 'react';



function About() {

  let productdetailapi = async (id) => {
  
          const productsdetail = await fetch(
              `https://fakestoreapi.com/products/1`
            );
        
        
        
            const productdetailResponse = await productsdetail.json();
  
            
        
            
            setProductsinfo(productdetailResponse);
  
        }
  
        useEffect(() => {
          productdetailapi();
        }, []);

  return (
    <>
     <div>about</div>
    </>
  )
}

export default About
