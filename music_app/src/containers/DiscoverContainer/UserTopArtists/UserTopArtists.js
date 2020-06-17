import React from 'react';

import { Col, Figure, Row, Button } from 'react-bootstrap';

const userTopArtists = (props) => {
    const getTop = (item) => {
        let image = item.images.map((images) => {
            return images.url
        });
        return (
            <Col key={item.id}>
                <Figure style={{ width: '30rem', paddingLeft: '8em' }}>
                <Figure.Image variant="top" src={image[1]} thumbnail />
                <Figure.Caption>
                    <h1>{item.name}</h1>
                    <p>Followers: {item.followers.total} </p>
                    <p>{item.genres[0]}</p>
                    <br />
                    <Button>Top Songs</Button>
                </Figure.Caption>
                </Figure>
            </Col>
        );
    }

    let results = props.results.map(getTop);

    return(
        <Row>
            {results}
        </Row>
    );
}

export default userTopArtists;