import React, { FC } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import styles from '../styles/PageLoader.module.scss';

// Reusable page loader component
const PageLoader: FC = () => (
  <Col className={`mt-5 d-flex align-items-center justify-content-center ${styles['page-loader']}`}>
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
  </Col>
);

export default PageLoader;
