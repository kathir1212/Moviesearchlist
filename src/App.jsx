import React from 'react'
import Header from './component/header'
import About from './router/about';
import  Home  from './router/home';
import { Route, Routes } from 'react-router-dom';
import Contact from './router/contact';
import Product from './component/product';
import { UserProvider } from './Context/useContext';
import { AddProductProvider } from './Context/addtocartContext';
import AddtoCard from './component/addtocart';

import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Context/productContext';

function App() {

  return (
  
  <>
   
   <ProductProvider>
    <Header/>
    
     <div className="App px-[5%]">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='product/:id' element={<Product/>}/>
         <Route path='addtocart' element={<AddtoCard/>}/>
       </Routes>

     </div>

     </ProductProvider>
    
    
        </>
  )
}

export default App
