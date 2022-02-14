import React, {
  FC, useMemo, lazy, Suspense,
} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';

import PageLoader from './components/PageLoader';

import logo from './ajaib-logo.png';

const UserPage = lazy(() => import('./pages/UserPage'));
const Home = lazy(() => import('./pages/Home'));

const App: FC = () => {
  const history = useHistory();

  const routes = useMemo(() => (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Home />
        )}
      />
      <Route
        exact
        path="/users"
        render={() => (
          <UserPage />
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => history.push('/users')}>Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Suspense fallback={<PageLoader />}>
          {/* routes here so navbar and sidebar no need to be created or destroyed every change page */}
          {routes}
        </Suspense>
      </Container>
    </>
  );
};

export default App;
