import { createContext, useContext, useState } from "react";
import React from "react";

export const AddProductContext = createContext();

export const AddProductProvider = ({ children , cart, setCart }) => {

    

  const [products] = useState([
    { id: 1, name: "Laptop", price: 1200, description: "High-end laptop" },
    { id: 2, name: "Phone", price: 800, description: "Latest smartphone" },
    { id: 3, name: "Headphones", price: 150, description: "Noise-canceling headphones" },
  ]);

  return (
    <AddProductContext.Provider value={{ cart, setCart , total }}>
      {children}
    </AddProductContext.Provider>
  );
};

export const useProductContext = () => useContext(AddProductContext);
