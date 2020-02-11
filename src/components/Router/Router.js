/* jshint ignore:start */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import NavBar from '../NavBar/Navbar'
import Movies from './Movie';
import Series from './Series';
import Favorites from './Favorites'
import Searcher from '../Searcher/Searcher'

class Router extends Component {

    componentDidMount() {
        this.getMovie()
    }

    getMovie = () => {
        const API = '69b64c77d37dfb52ac641752f9f81f79'
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.results);
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
                        <Route exact path="/movies" component={Movies} />
                        <Route exact path="/series" component={Series} />
                        <Route exact path="/favorites" component={Favorites} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router
