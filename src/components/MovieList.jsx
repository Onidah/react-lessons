import React from 'react'
import movies from '../data/movies'
import MovieCard from './MovieCard'

function MovieList() {
  return (
    <section>
        <div className="section-header">
            <p section-label>tonight</p>
            <h2>movies</h2>
            <p>{movies.length}movies</p>
        </div>
        <div className="movie-grid"> {
            movies.map((movie)=>(

                <MovieCard 
                key={movie.id}
                title={movie.title}
                category={movie.category}
                time={movie.time}
                price={movie.price}
                available={movie.available}
                style={movie.style}



                />
            )
            
            )} </div>
    </section>
  )
}

export default MovieList