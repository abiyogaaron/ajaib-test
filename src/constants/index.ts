import { EStatusErrorCode, IHeaderTable } from '../types';

// a API URL Constant
export const URL_REQUEST = {
  get_user: `${process.env.REACT_APP_API}/api/?page={page}&pageSize={pageSize}&results={results}`,
  get_user_mock: `${process.env.REACT_APP_API}/api/`,
};

// a Error Msg Constant
export const ERROR_MESSAGE: { [key: string | number ]: any } = {
  [EStatusErrorCode.GENERAL_ERROR]: 'Sorry, there are some technical issue right now',
  [EStatusErrorCode.NOT_FOUND]: 'Sorry, the data are not found',
  [EStatusErrorCode.RATE_LIMITER]: 'Sorry our server is busy, Please try again later',
};

export const MAX_USER_PER_PAGE = 5;

// asume max data is 50
export const MAX_DATA = 50;

export const USER_PAGE_TABLE_HEADERS: IHeaderTable[] = [
  { key: 'username', title: 'Username' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'gender', title: 'Gender' },
  { key: 'registered', title: 'Registered Date' },
];

export const FILTER_OPTIONS = [
  'all',
  'female',
  'male',
];
