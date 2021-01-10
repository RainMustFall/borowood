import "bootstrap/dist/css/bootstrap.css"
import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/naming-convention
class TopPanel extends React.Component {
  render(): JSX.Element {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="img/logo.png"
              width="221"
              height="37"
              className="d-inline-block align-top"
              alt="Borowood Studio"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default TopPanel;
