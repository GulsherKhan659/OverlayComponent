import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import './App.css';
import OverlayMain from './overlay-main/index';

function App() {
  return (
    <div>


      <Navbar bg="primary" variant="dark" expand="lg" className='mb-4'>
        <Container>
          <Navbar.Brand href="#home">Sample</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

        </Container>
      </Navbar>
      <Container>

        <Row>
          <Col>
            <div>
              <h3>
                MW:DROP SAMPLE WEBSITE

              </h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
              </p>

            </div>

            <Row>
              <Col>
                <p className='mx-4'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
                </p>

              </Col>
              <Col>
                <p className='mx-4'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
                </p>
              </Col>

            </Row>
          </Col>
          <Col></Col>
        </Row>

      </Container>
      <OverlayMain />

    </div>
  );
}

export default App;
