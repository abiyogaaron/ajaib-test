import React, { FC } from 'react';
import { Table, Col } from 'react-bootstrap';

const Home: FC = () => (
  <Col className="mt-5">
    <Table striped bordered>
      <thead>
        <tr>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Registered Date</th>
        </tr>
      </thead>
    </Table>
  </Col>
);

export default Home;
