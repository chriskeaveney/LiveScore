import '../App.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import React, {Component} from 'react'

class Contact extends React.Component {

render() {
  return(
    <div className="contactApp">
    <br />< br/>< br/>< br/>< br/>
    <Card className="topcard2" text="white" style={{ width: '35rem' }}>
    <Card.Header>CONTACT US</Card.Header>
    </Card>
    <Card className="contactcard" text="white" style={{ width: '35rem' }}>
    <Card.Body>
    <div>
    <div>
    <Row>
    <div className="centred">
    <Col md="auto">
    <p>Send e-mail to livescorefeedback@gmail.com</p>
    </Col>
    </div>
    </Row><br />
    <form action="mailto:someone@example.com" method="post" enctype="text/plain">
    <Row>
    <div className="centred">
    <Col md="auto">
    <p>First Name</p><br />
    <input type="text" name="Firstname"/>
    </Col>
    <Col md="auto">
    <p>Last Name</p><br />
    <input type="text" name="Lastname"/>
    </Col>
    </div>
    </Row><br />
    <Row>
    <div className="centred">
    <Col md="auto">
    <p>Email</p><br />
    <input type="text" name="mail" style={{ width: '24rem' }}/>
    </Col>
    </div>
    </Row><br />
    <Row>
    <div className="centred">
    <Col md="auto">
    <p>Comment</p><br />
    <textarea name="comment" size="50" style={{ width: '24rem' }}></textarea>
    </Col>
    </div>
    </Row><br />
    <Row>
    <div className="centred">
    <Col md="auto">
    <input type="submit" value="Send"/>
    <div className="gap"></div>
    <input type="reset" value="Reset"/>
    </Col>
    </div>
    </Row>
    </form>
    <br />< br/>
    </div>
    </div>
    </Card.Body>
    </Card>
    <br />< br/>< br/>
    </div>
    );
  }
}

export default Contact;
