import { createContext, useState, useContext } from "react";
import React from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );

        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setTotal((prevTotal) => {
      
      const updatedTotal = prevTotal + parseInt(product.price)  ;

      let discount = parseInt(updatedTotal)
    
    
      
      return discount; 
    });
  };

  

  const decQuantity = (productId , isInCart , index) => {
    
   



    const product = cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
  );

      setTotal((prevTotal) => prevTotal - parseInt(product.price) );
      
    }

  
  };

  const removeFromCart = (product , index) => {
    
   
      cart.splice(index,1)
      setCart([...cart])
      
  
     
        
        setTotal((prevTotal) => {
      
          
          const removeupdatedTotal = prevTotal - parseInt(product.price)  ;
    
          let discount = parseInt(removeupdatedTotal)
        
        
          
          return discount; 
        });
  };
  

  return (
    <ProductContext.Provider value={{ cart, total, addToCart, removeFromCart , decQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ProductContext);
};
