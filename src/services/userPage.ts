import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';
import httpRequest from '.';
import { MAX_DATA, MAX_USER_PER_PAGE, URL_REQUEST } from '../constants';
import { AppState } from '../redux';
import { setData, setError, setLoading } from '../redux/action/userPage';
import {
  IHttpReqConfig, IUserResponse, PromiseVoid, TUserPageData,
} from '../types';
import { IError, IUserPageAction } from '../types/userPage';

export const getUserData = (orderQuery?: string): ThunkAction<
PromiseVoid,
AppState,
{},
IUserPageAction
> => async (d: Dispatch, getState) => {
  const { form, currentPage } = getState().userPage;

  try {
    d(setLoading(true));
    let url = URL_REQUEST.get_user
      .replace('{page}', currentPage.toString())
      .replace('{pageSize}', (MAX_DATA / MAX_USER_PER_PAGE).toString())
      .replace('{results}', MAX_USER_PER_PAGE.toString());

    if (form.filter !== 'all') {
      url = `${url}&gender=${form.filter}`;
    } else {
      url.replace(`&gender=${form.filter}`, '');
    }

    if (form.keyWord) {
      url = `${url}&keyword=${form.keyWord}`;
    } else {
      url.replace(`&keyword=${form.keyWord}`, '');
    }

    if (orderQuery) {
      url = `${url}&${orderQuery}`;
    }

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
    const { message } = err as IError;

    d(setError(err as IError));
    toast.error(message);
  } finally {
    d(setLoading(false));
  }
};
