import React, { Component } from 'react'
import '../Movie/Movie.css';
// import Modal from '../Modal/Modal';

export default class Movie extends Component {

    state = {
        favsMovie: []
    }

    hendlesVideo = () => {
        let { id } = this.props.movies
        const baseURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        fetch(baseURL)
            .then((response) => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    trailer: result.results[0].key
                });
                // this.openVideo(this.state.trailer)
            });
    }

    getFavorite = (data) => {
        this.props.favorite(data)
    }

    render() {
        let { original_title, popularity, vote_average, release_date, overview, vote_count, poster_path } = this.props.movies
        let new_title = original_title
        if (overview.length >= 50) {
            overview = overview.substring(0, 100)
        }
        if(original_title.length >= 20){
            new_title = `${original_title.substring(0, 15)}...`
        }
        return (
            <div className="grid_movie">
                <div>
                    <img className="movie_image" src={`https://www.cliver.plus/movies/static/img/w342${poster_path}`} alt={`${new_title}`} />
                </div>
                <div></div>
                <div className="grid_desp">
                    <div className="grid_movie_header">
                        <div title={original_title} className="name_movie">{new_title}</div>
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
                        <button id="trailer" onClick={this.hendlesVideo} className="trailer">
                            <span id="name_trailer">Ver Trailer</span>
                            <span id="icon_trailer"><i className="fab fa-youtube"></i></span>
                        </button>
                        <span onClick={() => this.getFavorite(this.props.movies)} className="favorites" >
                            <span id="favorite_text">Agregar a favoritos</span> 
                            <span>   </span>
                            <i className="fas fa-heart" id="icon_favorite"></i>
                        </span>
                    </div>  
                </div>
            </div>
        )
    }
}

