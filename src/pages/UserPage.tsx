import React, {
  FC, useEffect, useMemo, useCallback,
} from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { AppState } from '../redux';

import {
  MAX_DATA,
  MAX_USER_PER_PAGE,
  USER_PAGE_TABLE_HEADERS,
  FILTER_OPTIONS,
} from '../constants';

import { getUserData } from '../services/userPage';
import DataTable from '../components/DataTable';
import PaginationWrapper from '../components/PaginationWrapper';

import { reformatDate } from '../utils';
import { setCurrPage, setForm } from '../redux/action/userPage';
import BreadCrumbsTab from '../components/BreadCrumbsTab';
import SearchWrapper from '../components/SearchWrapper';

const UserPage: FC = () => {
  const {
    currentPage,
    isLoading,
    data,
    form,
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
    dispatch(getUserData());

    return () => {
      dispatch(setForm({ filter: 'all', keyWord: '' }));
    };
  }, []);

  const handleFilterChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
    const newForm = { ...form };
    newForm.filter = event.currentTarget.value;

    batch(() => {
      dispatch(setForm(newForm));
      dispatch(getUserData());
    });
  }, [form]);

  const handleInputChange = useCallback((value: string) => {
    const newForm = { ...form };
    newForm.keyWord = value;

    batch(() => {
      dispatch(setForm(newForm));
      dispatch(getUserData());
    });
  }, [form]);

  const handleOnClickPage = useCallback((page) => {
    batch(() => {
      dispatch(setCurrPage(page));
      dispatch(getUserData());
    });
  }, []);

  const handleClickReset = useCallback(() => {
    batch(() => {
      dispatch(setForm({ ...form, filter: 'all' }));
      dispatch(getUserData());
    });
  }, [form]);

  const handleSortClick = useCallback((key: string, isAscend: boolean) => {
    const orderSort = isAscend ? 'ascend' : 'descend';
    const appendedQueryParam = `sortBy=${key}&sortOrder=${orderSort}`;

    dispatch(getUserData(appendedQueryParam));
  }, []);

  return (
    <>
      <BreadCrumbsTab />
      <h2>Users With Search and Filter</h2>
      <Row className="mt-4">
        <Col lg={6} md={6} xs={12} sm={12}>
          <SearchWrapper
            filterOpt={FILTER_OPTIONS}
            form={form}
            handleFilterChange={handleFilterChange}
            handleInputChange={handleInputChange}
            handleClickReset={handleClickReset}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            headers={USER_PAGE_TABLE_HEADERS}
            data={usersData}
            isLoading={isLoading}
            handleSort={handleSortClick}
            data-testid="users-data-table"
          />
          <PaginationWrapper
            currentPage={currentPage}
            pageSize={MAX_DATA / MAX_USER_PER_PAGE}
            handleClickPage={(page) => handleOnClickPage(page)}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserPage;
