import { TUserPageData } from '.';

export interface IError {
  status: number;
  message: string;
}

export interface ISearchForm {
  keyWord: string;
  filter: string;
}

export interface IUserPageState {
  data: TUserPageData[];
  isLoading: boolean;
  currentPage: number;
  error: IError;
  form: ISearchForm;
}

export enum EUserPageAction {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_CURRPAGE = 'SET_CURRPAGE',
  SET_ERROR = 'SET_ERROR',
  SET_FORM = 'SET_FORM',
}

export interface IUserPageSetLoadingAction {
  isLoading: boolean;
}

export interface IUserPageSetDataAction {
  data: TUserPageData[];
}

export interface IUserPageSetCurrPageAction {
  currentPage: number;
}

export interface IUserPageSetErrorAction {
  error: IError;
}

export interface IUserPageSetFormAction {
  form: ISearchForm;
}

export type TUserPagePayload =
  | IUserPageSetLoadingAction
  | IUserPageSetDataAction
  | IUserPageSetErrorAction
  | IUserPageSetCurrPageAction
  | IUserPageSetFormAction;

export interface IUserPageAction {
  type: EUserPageAction;
  payload: TUserPagePayload;
}
