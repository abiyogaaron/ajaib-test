import { rest } from 'msw';
import { URL_REQUEST } from '../../../constants';
import * as UserPage from '../mock/userPage';

export const requestHandlers = [
  rest.get(
    URL_REQUEST.get_user_mock,
    UserPage.UserPage,
  ),
];
