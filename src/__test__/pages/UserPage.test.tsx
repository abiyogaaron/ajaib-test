import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, cleanup, waitFor, screen, within, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupServer } from 'msw/node';
import { requestHandlers } from '../mocks/handlers';
import { UserResponse } from '../mocks/mock/userPage';

import UserPage from '../../pages/UserPage';

import store from '../../redux';
import { USER_PAGE_TABLE_HEADERS } from '../../constants';
import { reformatDate } from '../../utils';

const mswServer = setupServer(...requestHandlers);
beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe('---- Mounting Users Page ----', () => {
  afterEach(cleanup);

  test('UserPage API Call', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/users' }]}>
          <UserPage />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

    const { getAllByTestId } = await waitFor(() => within(screen.getByRole('table')));

    const thList = getAllByTestId('table-th');
    thList.forEach((th, index) => {
      const { getByText } = within(th);
      expect(getByText(USER_PAGE_TABLE_HEADERS[index].title)).toBeInTheDocument();
    });

    const trList = getAllByTestId('table-tr');
    trList.forEach((tr, index) => {
      const { getByText } = within(tr);
      const user = UserResponse.results;

      expect(getByText(
        user[index].login.username,
      )).toBeInTheDocument();

      expect(getByText(
        `${user[index].name.first} ${user[index].name.last}`,
      )).toBeInTheDocument();

      expect(getByText(
        user[index].email,
      )).toBeInTheDocument();

      expect(getByText(
        user[index].gender,
      )).toBeInTheDocument();

      expect(getByText(
        reformatDate(user[index].registered.date),
      )).toBeInTheDocument();
    });
  });

  test('Pagination Click Mechanism', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ pathname: '/users' }]}>
          <UserPage />
        </MemoryRouter>
      </Provider>,
    );

    const { getAllByTestId } = within(screen.getByTestId('pagination-wrapper'));
    const paginationItems = getAllByTestId('pagination-item');

    const { getByText } = within(paginationItems[1]);
    expect(getByText(2)).toBeInTheDocument();

    fireEvent.click(paginationItems[1]);
    const { currentPage } = store.getState().userPage;
    expect(currentPage).toBe(2);

    screen.debug(paginationItems[1]);
  });
});
