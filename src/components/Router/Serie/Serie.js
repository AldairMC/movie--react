import React, { Component } from 'react'
import '../Movie/Movie.css'

export default class Serie extends Component {
    render() {
        let { original_name, popularity, vote_average, first_air_date, overview, vote_count, poster_path } = this.props.series
        if (overview.length >= 50) {
            overview = overview.substring(0, 100)
        }
        return (
            <div className="grid_movie">
                <div>
                    <img className="movie_image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${original_name}`} />
                </div>
                <div></div>
                <div className="grid_desp">
                    <div className="grid_movie_header">
                        <div className="name_movie">{original_name}</div>
                        <div className="rate_movie">{vote_average}</div>
                    </div>
                    <div className="grid_evaluation">
                        <span className="duration_movie">{popularity}</span>
                        <span className="exit_movie">{first_air_date}</span>
                        <span className="category_movie">{vote_count}</span>
                    </div>
                    <div className="grid_abs">
                        <p className="desp" id="err">
                            {overview}
                        </p>
                    </div>
                    <div className="grid_actions">
                        <span id="trailer" className="trailer">Ver Trailer</span>
                        <span className="favorites">Agregar a favoritos <i className="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
