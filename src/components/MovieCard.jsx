import React, { useState } from 'react'

function MovieCard({
    title,
    category,
    time,
    hall,
    price,
    available,
    style
}) {
    const[selected,setSelected]=useState(false)
  return (

    <div className="movie-card">
        <div className={'movie-poster${style}'}>
            <div className="poster-content">
                <span className="category">{category}</span>
                <h2>{title}</h2>
            </div>
        </div>
        <div className="movie-content">
            <div className='movie-details'>
                <div>
                    <p>{time}.{hall}</p>
                    <h3>${price.toFixed(2)}{price >10  ? "Too expensive" : "good price"}</h3>
                </div>
                <span className={available ? "available available" : "available sold-out"}> 
                    {available ? "Available" : "Sold out"}
                    </span>
            </div>

            { available ? (
                <button className={selected ? "watch-button selected" :"watch-button"} 
                onClick={()=>setSelected(!selected)}>Add to wish list</button>
            ):(
                <button className="disabled-button" disabled>Not available</button>
            )}
        </div>
    </div>
  )
}

export default MovieCard