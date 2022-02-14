import { TUserPageData } from '.';

export interface IError {
  status: number;
  message: string;
}

export interface IUserPageState {
  data: TUserPageData[];
  isLoading: boolean;
  currentPage: number;
  error: IError;
}

export enum EUserPageAction {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_CURRPAGE = 'SET_CURRPAGE',
  SET_ERROR = 'SET_ERROR',
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

export type TUserPagePayload =
  | IUserPageSetLoadingAction
  | IUserPageSetDataAction
  | IUserPageSetErrorAction
  | IUserPageSetCurrPageAction;

export interface IUserPageAction {
  type: EUserPageAction;
  payload: TUserPagePayload;
}
