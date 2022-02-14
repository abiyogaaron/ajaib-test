import React, { FC, useMemo } from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import {
  Route, Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import logo from './ajaib-logo.png';

const App: FC = () => {
  const routes = useMemo(() => (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home />
        )}
      />
    </Switch>
  ), []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="128"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          {routes}
        </Row>
      </Container>
    </>
  );
};

export default App;
