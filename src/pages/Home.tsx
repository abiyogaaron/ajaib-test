import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import { AppState } from '../redux';

import { MAX_DATA, MAX_USER_PER_PAGE, USER_PAGE_TABLE_HEADERS } from '../constants';

import { getUserData } from '../services/userPage';
import DataTable from '../components/DataTable';
import PaginationWrapper from '../components/PaginationWrapper';

import { reformatDate } from '../utils';
import { setCurrPage } from '../redux/action/userPage';

const Home: FC = () => {
  const {
    currentPage,
    isLoading,
    data,
  } = useSelector((state: AppState) => state.userPage);
  const dispatch = useDispatch();

  const usersData = useMemo(() => data.map((user) => ({
    username: user.login.username,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    gender: user.gender,
    registeredDate: reformatDate(user.registered.date),
  })), [data]);

  useEffect(() => {
    dispatch(getUserData(currentPage));
  }, [currentPage]);

  return (
    <Col className="mt-5">
      <DataTable
        headers={USER_PAGE_TABLE_HEADERS}
        data={usersData}
        isLoading={isLoading}
      />
      <PaginationWrapper
        currentPage={currentPage}
        pageSize={MAX_DATA / MAX_USER_PER_PAGE}
        handleClickPage={(page) => dispatch(setCurrPage(page))}
        isLoading={isLoading}
      />
    </Col>
  );
};

export default Home;
