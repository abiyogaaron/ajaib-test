import React, { FC } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const BreadCrumbsTab: FC = () => {
  const location = useLocation();
  return (
    <Breadcrumb className="mt-5">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>
        {location.pathname.replace('/', '')}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumbsTab;
