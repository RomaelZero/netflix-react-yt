import React, { useState, useEffect } from 'react';
import requestPopular from "../Requests.js";
import Row from "./Row.jsx";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        console.log("Requesting popular movies...");
        setMovies(requestPopular);
    }, []);

    useEffect(() => {
        console.log("Movies changed:", movies);
        if (movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        }
    }, [movies]);

    // console.log("Current movie:", movie);

    const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }

    return (
        <div className="w-full h-[550px] text-white">
            <div className='w-full h-full'>
                {movie && (
                    <img className='w-full h-full object-cover' src={movie.poster} alt="movie poster"/>
                )}
              <div className='absolute w-full top-[20%] p-4 md:p-8'>
                  <h1 className="text-3xl md:text-5xl font-fold">{movie?.title}</h1>
                <div className='my-4'>
                <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
                </button>
                <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
                </button>
             </div>  
                <p className='text-gray-400 text-sm'>Released: {movie?.year}</p> 
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                {truncateString(movie?.summary, 150)}</p> 
              </div>               
            </div>
            <Row rowID='1' title="Up Coming"  fetchURL={movies} />
            <Row rowID='2' title="Popular"  fetchURL={movies} />
            <Row rowID='3' title="Trending"  fetchURL={movies} />
            <Row rowID='4' title="Top Rated"  fetchURL={movies} />
            <Row rowID='5' title="Horror"  fetchURL={movies} />
        </div>
    );
}

export default Main;

