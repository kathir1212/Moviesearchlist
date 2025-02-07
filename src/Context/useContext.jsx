
import { createContext , useState } from "react";
import React from "react";
import { useEffect } from "react";




let UserContext = createContext()

export const UserProvider = ({children}) => {

    const [products , setProducts] = useState([])


    
     

       useEffect(() => {
     
               
  
  
                    
                    

              }, []);
    
              
    return(
        
  
    
        <UserContext.Provider value = {{ products, setProducts }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;


