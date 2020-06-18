import React, { Component } from 'react';
import classes from './WeatherContainer.module.css';
import WeekContainer from '../../components/Weather/WeekContainer/WeekContainer';
import { Jumbotron, Container } from 'react-bootstrap';

 class WeatherContainer extends Component {
    render() {
        return (
            <>
                <Jumbotron fluid className={classes.jumbo}>
                    <Container>
                        <h1>5 Day Forecast</h1>
                    </Container>
                </Jumbotron>
                <WeekContainer/>
            </>
        )
    }
}

export default WeatherContainer;