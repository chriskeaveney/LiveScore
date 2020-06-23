import React from 'react';
import '../App.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormControl,
  Form,
  Button
} from 'react-bootstrap';

// NavBar class is defined
class NavBar extends React.Component {
  // Initializes an object's state in a class (NavBar)
  constructor(props) {
    // Used to pass props to the parent constructor
    super(props)
    this.state = { match: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ match: event });
  };

  handleSubmit = event => {
    alert("match is: " + this.state.match);
    event.preventDefault();
  };

  render() { // Transforms React components into DOM nodes that the browser use
    return ( // The output method of render
        <Navbar className="nav fixed-top">
          <div className="icon"></div>
          <Navbar.Brand href="/">{this.props.heading}</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
          <Form onSubmit={this.handleSubmit} inline="inline">
            <FormControl type="text" placeholder="Search"
              onChange={this.handleChange} className="mr-sm-2"/>
            <Button className="search" type="submit" value="Submit">Search</Button>
          </Form>
        </Navbar>);
  }
}

// Exports the NavBar class
export default NavBar;
