import Amazon from '../assets/amazon.png'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/cart-icon-16.png'
import Cinema from '../assets/cinema.png/'


function Header() {


  return (
    <>
     <div className='headersession'>
<div className='header p-2  flex  shadow-lg justify-center items-center'>
<div className='logo flex-1'>
     <h1 className='text-xl font-bold mt-4 ml-[10%]'  >Cinema</h1>
</div> 
<div className='menu flex-4'>

</div>
<div className='loginRegister flex flex-1 md:gap-[2%] sm:gap-[5%]'>
    <div className='login flex-1'>

    </div>

    

</div>
</div>

     </div>

    </>
  )
}

export default Header
