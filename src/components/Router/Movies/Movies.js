import React, { Component } from 'react'
import '../Movies/Movies.css'

//component 
import Movie from '../Movie/Movie'

export default class Movies extends Component {

    favorite = (data) => {
        this.props.localMovie(data)
    }
    
    render() {
        let data = this.props.movies
        return (
            <div className="grid">
                {
                    Object.keys(data).map(i => (
                        <Movie
                            key={i}
                            movies={this.props.movies[i]}
                            favorite={this.favorite}
                        />
                    ))
                }
            </div>
        )
    }
}
