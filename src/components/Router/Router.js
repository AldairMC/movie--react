/* jshint ignore:start */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import NavBar from '../NavBar/Navbar';
import Series from './Series/Series';
import Favorites from './Favorites/Favorites';
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
        search: [],
        year: [],
        genders: [],
        filterYear: "",
        filterGender: "",
        favsMovie: [],
        favsSerie: []
    }

    componentDidMount() {
        this.getMovie()
        this.getSeries()
        this.getYear()
        this.setMovie()
        this.setSerie()
    }



    getMovie = (page = 1, filterYear = '', filterGender = '') => {
        const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}${filterYear}${filterGender}`;
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

    getSeries = (page = 1, filterYear = '', filterGender = '') => {
        const baseUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}${filterYear}${filterGender}`;
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

    getYear = () => {
        let today = new Date().getFullYear()
        let i = 1960
        let arr = []
        while(i <= today){
            arr.push({"id": i, "name": i})
            i++
        }
        this.setState({
            year: arr
        })
    }

    getDecPage = (page) => {
        let URL = window.location.pathname
        if(URL === "/movies") this.getMovie(page)
        else if(URL === "/series") this.getSeries(page)
    }

    getIncPage = (page) => {
        let URL = window.location.pathname
        let filter = this.state.filterYear
        if(URL === "/movies") this.getMovie(page, filter)
        else if(URL === "/series") this.getSeries(page)
    }

    filterYear = (data) => {
        let filter = `&year=${data}`
        let url = window.location.pathname
        this.setState({
            filterYear: filter
        })
        if(url === '/movies'){
            this.getMovie(1, filter, '')
        }else if(url === '/series'){
            this.getSeries(1, filter, '')
        }else{
            this.getMovie()
        }
    }

    filterGender = (data) => {
        let filter = `&with_genres=${data}`
        let url = window.location.pathname
        this.setState({
            filterGender: filter
        })
        if(url === '/movies'){
            this.getMovie(1, '', filter)    
        }else if(url === '/series'){
            this.getSeries(1, '', filter)
        }else{
            this.getSeries()
        }
    }

    setMovie = (data) => {
        if(data){
            const urlBase = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            fetch(urlBase)
                .then((response) => {
                    return response.json();
                })
                .then(result => {
                    this.setState({
                        genders: result.genres
                    });
                }
            );
        }
    }

    setSerie = (data) => {
        if(data){
            const urlBase = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            fetch(urlBase)
                .then((response) => {
                    return response.json();
                })
                .then(result => {
                    this.setState({
                        genders: result.genres
                    });
                }
            );
        }
    }

    setHome = (data) => {
        if(data === '/'){
            this.getMovie()
            this.getSeries()
        }
    }

    localMovie = (data) => {
        localStorage.setItem(`m${data.id}`, JSON.stringify(data))
    }

    localSerie = data => {
        localStorage.setItem(`s${data.id}`, JSON.stringify(data))
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar 
                        setSerie={this.setSerie}
                        setMovie={this.setMovie}
                        setHome={this.setHome}
                    />
                    <Searcher
                        getSearch={this.getSearch}
                        title="Search for a movie, serie and videos"
                    />
                    <Description />
                    <Filter
                        year={this.state.year} 
                        gender={this.state.genders}
                        filterYear={this.filterYear}
                        filterGender={this.filterGender}
                    />
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Movies
                                movies={this.state.movies}
                                localMovie={this.localMovie}
                            />
                        )}
                        />
                        <Route exact path="/movies" render={() => (
                            <Movies
                                movies={this.state.movies}
                                localMovie={this.localMovie}
                            />
                        )} />
                        <Route exact path="/series" render={() => (
                            <Series
                                series={this.state.tv}
                                localSerie={this.localSerie}
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
