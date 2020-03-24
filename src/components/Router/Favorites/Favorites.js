import React, { Component } from 'react';
import '../Movies/Movies.css'
import Movie from '../Movie/Movie';
import Serie from '../Serie/Serie';

class Favorites extends Component {

    render() {
        let key = ''
        let movies = []
        let series = []
        for (let i=0; i<=localStorage.length-1; i++) {
            key = localStorage.key(i);
            if(key[0] === 'm'){
                movies.push(JSON.parse(localStorage.getItem(key)))
            }else{
                series.push(JSON.parse(localStorage.getItem(key)))
            }
        }
        return (
            <React.Fragment>
                <div className="grid">
                    {
                        Object.keys(movies).map(i => (
                            <Movie 
                                key={i}
                                movies={movies[i]}
                            />
                        ))
                    }
                    {
                        Object.keys(series).map(i => (
                            <Serie 
                                key={i}
                                series={series[i]}
                            />
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Favorites;