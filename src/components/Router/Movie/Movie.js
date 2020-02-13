import React, { Component } from 'react'
import '../Movie/Movie.css';

export default class Movie extends Component {
    render() {
        let { original_title, popularity, vote_average, release_date, overview, vote_count, poster_path } = this.props.movies
        if (overview.length >= 50) {
            overview = overview.substring(0, 100)
        }
        return (
            <div className="grid_movie">
                <div>
                    <img className="movie_image" src={`https://www.cliver.plus/movies/static/img/w342${poster_path}`} alt={`${original_title}`} />
                </div>
                <div></div>
                <div className="grid_desp">
                    <div className="grid_movie_header">
                        <div className="name_movie">{original_title}</div>
                        <div className="rate_movie">{vote_average}</div>
                    </div>
                    <div className="grid_evaluation">
                        <span className="duration_movie">{popularity}</span>
                        <span className="exit_movie">{release_date}</span>
                        <span className="category_movie">{vote_count}</span>
                    </div>
                    <div className="grid_abs">
                        <p className="desp" id="err">
                            {overview}
                        </p>
                    </div>
                    <div className="grid_actions">
                        <span id="trailer" className="trailer"><strong>Ver Trailer</strong></span>
                        <span className="favorites">Agregar a favoritos <i className="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}

