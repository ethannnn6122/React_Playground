import React from 'react';
import { Card, Container } from 'react-bootstrap';
import moment from 'moment';

const DayCard = ({ reading }) =>  {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
  
    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    return (
        <Container style={ {padding: '1em 1em .5em 25em'} }>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{moment(newDate).format('dddd')}</Card.Title>
                    <Card.Text>
                    {moment(newDate).format('MMMM Do, h:mm a')}
                    </Card.Text>
                    <i className={imgURL}></i>
                    <h2>{Math.round(reading.main.temp)} °F</h2>
                    <Card.Text>
                    {reading.weather[0].description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default DayCard;