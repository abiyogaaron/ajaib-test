import { AxiosRequestConfig, Method } from 'axios';

export type EnvT = 'development' | 'test' | 'uat' | 'production';

export enum EStatusErrorCode {
  GENERAL_ERROR = 500,
  RATE_LIMITER = 429,
  NOT_FOUND = 404,
  // assumed and many others BE error code
}

export type PromiseVoid = Promise<void>;

type BodyType = object | string | undefined;
export interface IHttpReqConfig extends AxiosRequestConfig {
  data: BodyType;
  method: Method;
  headers?: {[key: string]: string};
}

export type TGender = 'male' | 'female';
export type TTitle = 'Mr'| 'Mrs' | 'Ms' | 'Miss' | 'Madame';

interface IUserData {
  gender: TGender;
  name: {
    title: TTitle;
    first: string;
    last: string;
  },
  location: {
    street: {
      number: number;
      name: string;
    },
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    },
    timezone: {
      offset: string;
      description: string;
    }
  },
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  },
  dob:{
    date: string;
    age: number;
  },
  registered:{
    date: string;
    age: number;
  },
  phone: string;
  cell: string;
  id:{
    name: string;
    value: string | null;
  },
  picture:{
    large: string;
    medium: string;
    thumbnail: string;
  },
  nat: string;
}

export interface IUserResponse {
  results: IUserData[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
}

export interface IHeaderTable {
  key: string;
  title: string;
}

export type TUserPageData = Pick<
IUserData,
'registered' | 'name' | 'email' | 'login' | 'gender'
>;
