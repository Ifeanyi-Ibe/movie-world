import React from 'react'
import{Link, BrowserRouter} from 'react-router-dom'

export default function MovieCard(props) {

    const { movie } = props;
    console.log(movie)

    return (
        <BrowserRouter>
        <div>
            <div className="card">
                <div className="card--img">
                <img  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={`${movie.title} poster`} />
                </div>
                <div className="card--content">
                <h3 className="card--title">{ movie.title}</h3>
                <p><small className="release_date">RELEASE DATE: {movie.release_date !== '' ? movie.release_date : 'Not Available'}</small></p>
                <p><small className="rating">RATING: {movie.vote_average !== '' ? movie.vote_average : 'Not Available'}</small></p>
                <p className="desc">{movie.overview !== '' ? movie.overview : ''} </p>
                <Link to={movie.homepage}><p>Watch Now</p></Link>
                </div>
            </div>
        </div>
        </BrowserRouter>
    )
} 