import { TUserPageData } from '../../types';
import {
  IUserPageAction,
  EUserPageAction,
  IError,
  ISearchForm,
} from '../../types/userPage';

export const setLoading = (isLoading: boolean): IUserPageAction => ({
  type: EUserPageAction.SET_LOADING,
  payload: { isLoading },
});

export const setData = (data: TUserPageData[]): IUserPageAction => ({
  type: EUserPageAction.SET_DATA,
  payload: { data },
});

export const setError = (error: IError): IUserPageAction => ({
  type: EUserPageAction.SET_ERROR,
  payload: { error },
});

export const setCurrPage = (currentPage: number): IUserPageAction => ({
  type: EUserPageAction.SET_CURRPAGE,
  payload: { currentPage },
});

export const setForm = (form: ISearchForm): IUserPageAction => ({
  type: EUserPageAction.SET_FORM,
  payload: { form },
});
