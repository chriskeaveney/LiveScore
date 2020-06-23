import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Card, Row, Col, Container, Button} from 'react-bootstrap';

class Matches extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      matches: [],
      isLoaded: false,
      filtered: []
    };
  }

  componentDidMount() {
    fetch("https://www.scorebat.com/video-api/v1/").then(res => res.json()).then(json => {
      this.setState({isLoaded: true, matches: json})
    });
  }

  render() {
    var {
      isLoaded,
      matches
    } = this.state;

    //filter matches by search keyword
    // var searchWord ="Pyunik - Shirak";

    // find method similar to .contains instead of searchword -- contains(searchWord)
    // var filteredMatches = this.state.matches.filter(match => match.title==searchWord);

    if (!isLoaded) {
      return <div classNameName="loading">Loading...</div>;
    } else {

      return (<div classNameName="App">
        <br/>< br/>< br/>< br/>< br/>
        <Card classNameName="topcard" text="white" style={{width: '37rem'}}>
          <Card.Header>LATEST FIXTURES</Card.Header>
        </Card>
        {
          // filteredMatches.map for search function
          matches.map((match, id) => (<div classNameName="App">
            <Card classNameName="card" text="white" style={{width: '37rem'}}>
              <Card.Body>
                <div>
                  <div>
                    <Row key={id}>
                      <Col md="auto">
                        <img className="image" src={match.thumbnail} height="150" alt=""/>
                      </Col>
                      <Col md="auto">
                        <p>{match.competition.name.substring(0, 24)}</p>< br/>
                        <p>{match.title.substring(0, 30)}</p>< br/>< br/>
                        <Link className="link" to={{pathname: `/MatchDetails/${match.title}`}}>
                          <p className="matchescore">Match Score</p>
                        </Link>< br/>
                        <p>{match.videos[0].title}</p>< br/>
                        <p>{match.date.substring(0, 10)}</p>< br/>< br/>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br/>< br/>< br/>
          </div>))
        }
      </div>);
    }
  }
}

export default Matches;
