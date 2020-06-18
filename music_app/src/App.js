import React, { Component } from 'react';

import Navbar from './components/UI/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

class App extends Component {

  authorize = () => {
    const client_id = "8e7b449d0943437fb554085d60ab3608";
    const redirect_uri = `http:%2F%2Flocalhost:3000/discover`;
    window.location.href= `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email%20user-top-read&response_type=token&state=123`;
}
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <Container fluid className="App">
          <Row>
            <Navbar auth={this.authorize} />
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
