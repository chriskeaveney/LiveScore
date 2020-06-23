import '../App.css';
import {Card, Row, Col, Container} from 'react-bootstrap';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import React, {Component} from 'react'

class MatchDetails extends React.Component {
  // Creating objects
  constructor(props) {
    super(props)
    /* Binding this to the goBack function so that
    it can be called when a button is clicked */
    this.goBack = this.goBack.bind(this);
    // Checking to see the parameters are being logged
    console.log(this.props.match.params.title)
    // Declaring state object
    this.state = {
      // Setting key value pairs
      match: {},
      isLoaded: false,
      title: this.props.title
    };
  }

  // Called once the component is mounted to the DOM
  componentDidMount() {
    // Gets the json object from API & returns as promise with json content
    fetch("https://www.scorebat.com/video-api/v1/").then(res => res.json())
    // Loops through array of matches and filters by the title passed in through props
      .then(json => {
      this.setState({
        match: json.filter(item => item.title == this.props.match.params.title)
      })
    });
  }

  // Function to return to previous page
  goBack() {
    this.props.history.goBack();
  }

  render() {
    console.log(this.state.match);
    if (this.state.match[0] != null) {
      return (<div>
        <br/><br/><br/>
        <div className="space"></div>
        <button className="goBack" onClick={this.goBack}>Go Back</button>
        <br/>< br/>< br/>
        <ul id="listone">
          <Card className="card" text="white" style={{width: '50rem'}}>
            <Card.Header>{this.state.match[0].side1.name}<p className="matchescore"> VS
              </p> {this.state.match[0].side2.name}</Card.Header>
            <br/>
            <p className="viewdetails1">LEAGUE
              <p className="matchescore"> | </p>
              {this.state.match[0].competition.name}</p>
            <p className="viewdetails2">{this.state.match[0].date.substring(0, 10)}</p><br/>
            <div className="video">
              <p dangerouslySetInnerHTML={{__html: this.state.match[0].videos[0].embed}}></p>
            </div>
            <br/>
            <p className="viewdetails">HIGHLIGHTS</p>
            <p className="viewdetails2">{this.state.match[0].videos[0].title}</p>
            <br/>
            <a className="viewdetails3" href={this.state.match[0].url} target="_blank">View on Scorebat</a>
            <br/><br/>
          </Card>
        </ul>
        <br/>< br/>< br/>
      </div>
    );
    } else {
      return (<div className="loading">
        Loading...
      </div>);
    }
  }
}

export default MatchDetails;
