import React from 'react';

import { Accordion, Card } from 'react-bootstrap';

const userTopArtists = (props) => {
    const getRec = (item) => {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    {item.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }

    const results = props.results.map(getRec);

    return(
        <>
            {results}
        </>
    );
}

export default userTopArtists;