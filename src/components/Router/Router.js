import React, { Component } from 'react';
import { BrowserRouter as B_Router, Route, Switch} from 'react-router-dom';

//components
import NavBar from '../NavBar/Navbar'
import Movies from './Movie';
import Series from './Series';
import Favorites from './Favorites'

class Router extends Component {
    render() {
        return (
            <div>
                <B_Router>
                    <NavBar />

                    <Switch>
                        <Route exact path="/movies" component={Movies}/>
                        <Route exact path="/series" component={Series}/>
                        <Route exact path="/favorites" component={Favorites}/>
                    </Switch>
                </B_Router>
            </div>
        );
    }
}

export default Router