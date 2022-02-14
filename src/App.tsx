import React, {
  FC, useMemo, lazy, Suspense,
} from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import {
  Route, Switch,
} from 'react-router-dom';

import PageLoader from './components/PageLoader';

import logo from './ajaib-logo.png';

const Home = lazy(() => import('./pages/Home'));

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
          <Suspense fallback={<PageLoader />}>
            {/* routes here so navbar and sidebar no need to be created or destroyed every change page */}
            {routes}
          </Suspense>
        </Row>
      </Container>
    </>
  );
};

export default App;
