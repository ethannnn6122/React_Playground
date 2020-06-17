import React from 'react';
import classes from './NavBar.module.css';

import { Route, NavLink } from 'react-router-dom';
import WelcomeContainer from '../../../containers/WelcomeContainer/WelcomeContainer';
import DiscoverContainer from '../../../containers/DiscoverContainer/DiscoverContainer';

const navBar = (props) => {
    return (
        <div className={classes.NavBar}>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/' exact>Home</NavLink></li>
                        <li onClick={props.auth}><NavLink to="/discover">Discover</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </header> 
            <Route path="/" exact render={() => <WelcomeContainer  discover={props.auth} />}/>
            <Route path="/discover" component={DiscoverContainer}/>
        </div>
    );
}

export default navBar;