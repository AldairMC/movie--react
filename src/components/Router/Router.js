/* jshint ignore:start */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import NavBar from '../NavBar/Navbar';
import Series from './Series/Series';
import Favorites from './Favorites';
import Searcher from '../Searcher/Searcher';
import Movies from './Movies/Movies';
import Description from '../Description/Description'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagiation'

require('dotenv').config()

class Router extends Component {

    state = {
        movies: [],
        tv: [],
        search: []
    }

    componentDidMount() {
        this.getMovie()
        this.getSeries()
    }

    URLactual = window.location.pathname;

    getMovie = (page = 1) => {
        const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
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

    getSeries = (page = 1) => {
        const baseUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;
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

    getSearch = (data) => {
        if (data.length >= 4) {
            const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${data}&include_adult=false`;
            fetch(baseUrl)
                .then((response) => {
                    return response.json();
                })
                .then(result => {
                    if (result.length !== 0) {
                        this.setState({
                            movies: result.results
                        });
                    }
                });
        } else {
            this.getMovie()
        }
    }

    getDecPage = (page) => {
        let URL = window.location.pathname
        if(URL === "/movies") this.getMovie(page)
        else if(URL === "/series") this.getSeries(page)
    }

    getIncPage = (page) => {
        let URL = window.location.pathname
        if(URL === "/movies") this.getMovie(page)
        else if(URL === "/series") this.getSeries(page)
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Searcher
                        getSearch={this.getSearch}
                        title="Search for a movie, serie and videos"
                    />
                    <Description />
                    <Filter />
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
                    <Pagination 
                        getDecPage={this.getDecPage}
                        getIncPage={this.getIncPage}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default Router
