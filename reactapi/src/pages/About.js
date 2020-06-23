import '../App.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import React, {Component} from 'react'

class About extends React.Component {

  render() {
  return(
    <div className="App">
    <br />< br/>< br/>< br/>< br/>
    <div className="App">
    <Card className="card" text="white" style={{ width: '65rem', height: '30rem' }}>
    <Card.Body>
          <div>
            <div>
            <Row>
            <Col md="auto">
            <div className="aboutimg"> </div>
            </Col>
            <Col>
            <h1>About LiveScore</h1>
              <p>Live score is a type of service offered by many sports-related
               websites and broadcasters as well as online sports betting operators.<br/><br/>
               The idea of live scores is to provide real time info about sports
               results from various disciplines. Live scores like this are usually free and are very
               popular among sports betting enthusiasts, as they allow viewing collected data
               on many sports events. <a className="matchescore" href="https://en.wikipedia.org/wiki/Live_scores">[1]</a>
               <br/><br/> You can view any match from the list provided on
               the homepage showing all latest matches in top tier football. Then, simply by
               clicking Match Score, you can view highlights and live action videos from
               that particular match. By clicking the View on scorebat link at the bottom of
               any match details page, you can also view any further info about this
               fixture on Scorebat.com<br/><br/></p>
              </Col>
              </Row>
              </div>
            </div>
      </Card.Body>
    </Card>
    <br />< br/>< br/>
    </div>
    </div>
  );
  }
}

export default About;
