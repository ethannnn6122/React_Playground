import React from 'react';
import classes from './ArtistResults.module.css';
import {Card, Button, Col, Row} from 'react-bootstrap';

const artistResults = (props) => { 
    const getData = (item) => {
        let image = item.images.map((images) => {
            return images.url
        });
        return(
            <Col key={item.id}>
                <Card  style={{ width: '15rem' }}>
                <Card.Img variant="top" src={image[1]} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Followers: {item.followers.total} </Card.Text>
                    <Card.Text>{item.genres[0]}</Card.Text>
                    <br />
                    <Button><a className={classes.Link} target="_blank" rel="noopener noreferrer" href={item.external_urls.spotify}>Go to Artist Profile</a></Button>
                </Card.Body>
                </Card>
                <br/>
            </Col>
            
        ); 
    }
    let artistCards = props.results.map(getData);

    return (
        <Row>
            {artistCards}
        </Row> 
    );
}

export default artistResults;