import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Product() {

  const { id } = useParams(); 
  const [product, setProductsinfo] = useState({});


  let productdetailapi = async (id) => {
    console.log(id,"ididididi");
    

    axios.get(`https://www.omdbapi.com/?apikey=1ea9b292&i=${id}`)  
    .then(res => {  
      const animals = res.data;  
    console.log(animals,"aninini");
    
      setProductsinfo(animals); 
     
       
    })    
     

  }

  


  useEffect(() => {
    productdetailapi(id);
  }, [id]);

  

  return (
    
    <div className='flex p-[5%]'>
      <div className='flex-1'>
      <img src={product.Poster} alt="" />
      </div>
      <div className='flex-2'>
        <div className='flex gap-[4%]'>
        <h1 className="  text-xl font-bold mt-4">Movie Name :</h1>
        <h2 className="  text-lg font-bold mt-4">{product.Title}</h2>
        </div>

        <div className='flex gap-[4%]'>
        <h1 className="  text-xl font-bold mt-4">Genre :</h1>
        <h2 className="  text-lg font-bold mt-4">{product.Genre}</h2>
        </div>


        <div className='flex gap-[4%]'>
        <h1 className="  text-xl font-bold mt-4">Released :</h1>
        <h2 className="  text-lg font-bold mt-4">{product.Released
        }</h2>
        </div>

        <div className='flex gap-[4%]'>
        <h1 className="  text-xl font-bold mt-4">Imbd Rating :</h1>
        <h2 className="  text-lg font-bold mt-4">{product.imdbRating
        }</h2>
        </div>

        <div className='flex gap-[4%]'>
        <h1 className=" flex-1 text-xl font-bold mt-4">Actors :</h1>
        <h2 className=" flex-8 text-lg font-bold mt-4">{product.Actors}</h2>
        </div>

        <div className='flex gap-[4%]'>
        <h1 className=" flex-1 text-xl font-bold mt-4">Plot :</h1>
        <h2 className=" flex-9 text-lg font-bold mt-4">{product.Plot}</h2>
        </div>


       
      </div>
     
    </div>
  );
}

export default Product;




