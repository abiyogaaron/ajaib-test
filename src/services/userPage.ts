import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import httpRequest from '.';
import { MAX_DATA, MAX_USER_PER_PAGE, URL_REQUEST } from '../constants';
import { AppState } from '../redux';
import { setData, setError, setLoading } from '../redux/action/userPage';
import {
  IHttpReqConfig, IUserResponse, PromiseVoid, TUserPageData,
} from '../types';
import { IError, IUserPageAction } from '../types/userPage';

export const getUserData = (page: number): ThunkAction<
PromiseVoid,
AppState,
{},
IUserPageAction
> => async (d: Dispatch) => {
  try {
    d(setLoading(true));
    const url = URL_REQUEST.get_user
      .replace('{page}', page.toString())
      .replace('{pageSize}', (MAX_DATA / MAX_USER_PER_PAGE).toString())
      .replace('{results}', MAX_USER_PER_PAGE.toString());
    const httpCfg: IHttpReqConfig = {
      method: 'GET',
      data: {},
    };

    const response = await httpRequest<IUserResponse>(url, httpCfg);
    const reformatUsers: TUserPageData[] = response.results.map((user) => ({
      registered: user.registered,
      name: user.name,
      email: user.email,
      login: user.login,
      gender: user.gender,
    }));
    d(setData(reformatUsers));
  } catch (err) {
    d(setError(err as IError));
  } finally {
    d(setLoading(false));
  }
};
