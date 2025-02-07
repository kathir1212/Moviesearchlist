import React, { useState, useEffect } from "react";
import { useCart } from "../Context/productContext";
import axios from 'axios';
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); 
  const [searchQuery, setSearchQuery] = useState("avengers"); 
  const API_KEY = "1ea9b292";

  const fetchMovies = async (query, newPage = 1, reset = false) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${newPage}`);
      if (response.data.Search) {
        setMovies(prevMovies => reset ? response.data.Search : [...prevMovies, ...response.data.Search]); 
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery, 1, true); 
  }, []);

  const formik = useFormik({
    initialValues: { username: "" },
    validate: (values) => {
      let error = {};
      if (!values.username.trim()) {
        error.username = "Please enter a movie name";
      }
      return error;
    },
    onSubmit: (values) => {
      setSearchQuery(values.username);
      setPage(1);
      fetchMovies(values.username, 1, true); 
    },
  });

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(searchQuery, nextPage);
  };

  return (
    <div>
      <div>
       

      <form class="max-w-md mx-auto mt-[3%]"  onSubmit={formik.handleSubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" 
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies List" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

        


      </div>
      
      <div className="grid grid-cols-5 gap-5 p-5 bg-gray-100">
        {movies.map((movie, index) => (
          <div key={index} className="max-w-sm bg-white  rounded-lg shadow-lg">
<Link to={`product/${movie.imdbID}`}>
<img src={movie.Poster} alt={movie.Title} className="rounded-t-lg w-full h-48 object-cover" />
</Link>
            <div className="p-4">
              <h5 className="text-lg font-bold">{movie.Title}</h5>
            </div>
          </div>
        ))}
      </div>

      {movies.length > 0 && (
        <div className="text-center mt-5 mb-[3%]">
          <button onClick={loadMore} className="px-5 py-2 bg-green-600 text-white rounded-lg">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
