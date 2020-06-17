import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Button, Card} from 'react-bootstrap';

class WelcomeContainer extends Component {
    test = () => {
        alert("Clicked");
    }
    render() {
        return(
            <>
                <Container fluid>
                        <br />
                    <Jumbotron style={{ backgroundColor: "#3F6F8C" }}>
                            <Container>
                                <h1>Welcome to DiscoverTunes</h1>
                                <p>Discover new music and find out your listening habits!</p>
                                <p>
                                    <Button style={{ backgroundColor: "#011640", border: "none"}} onClick={this.props.discover}>Start Discovering!</Button>
                                </p>
                            </Container>
                        </Jumbotron>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem', borderRadius: "2em" }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Qui deserunt et consectetur officia occaecat qui nostrud et cillum. Id ea aliquip commodo sit ad sit sint reprehenderit cillum. Deserunt ea ad nisi eiusmod qui ea ex esse amet id nisi.
                                    Deserunt aute fugiat esse minim veniam laborum anim. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem',  borderRadius: "2em" }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Qui deserunt et consectetur officia occaecat qui nostrud et cillum. Id ea aliquip commodo sit ad sit sint reprehenderit cillum. Deserunt ea ad nisi eiusmod qui ea ex esse amet id nisi.
                                    Deserunt aute fugiat esse minim veniam laborum anim. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem',  borderRadius: "2em"  }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                    Qui deserunt et consectetur officia occaecat qui nostrud et cillum. Id ea aliquip commodo sit ad sit sint reprehenderit cillum. Deserunt ea ad nisi eiusmod qui ea ex esse amet id nisi.
                                    Deserunt aute fugiat esse minim veniam laborum anim. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default WelcomeContainer;