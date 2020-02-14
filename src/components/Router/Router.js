/* jshint ignore:start */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import NavBar from '../NavBar/Navbar';
import Series from './Series/Series';
import Favorites from './Favorites';
import Searcher from '../Searcher/Searcher';
import Movies from './Movies/Movies';

require('dotenv').config()

class Router extends Component {

    state = {
        movies: [],
        tv: []
    }

    componentDidMount() {
        this.getMovie()
        this.getSeries()
    }



    getMovie = () => {
        const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
        fetch(baseUrl)
            .then((response) => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    movies: result.results
                });
            });
    }

    getSeries = () => {
        const baseUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
        fetch(baseUrl)
            .then((response) => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    tv: result.results
                });
            });
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Searcher
                        title="Search for a movie, serie and videos"
                    />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Movies
                                movies={this.state.movies}
                            />
                        )}
                        />
                        <Route exact path="/movies" render={() => (
                            <Movies
                                movies={this.state.movies}
                            />
                        )} />
                        <Route exact path="/series" render={() => (
                            <Series
                                series={this.state.tv}
                            />
                        )} />
                        <Route exact path="/favorites" component={Favorites} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router
