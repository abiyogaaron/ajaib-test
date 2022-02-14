import axios, {
  AxiosResponse,
  AxiosError,
} from 'axios';
import { ERROR_MESSAGE } from '../constants';
import { EStatusErrorCode, IHttpReqConfig } from '../types';

function httpRequest<respType = any>(url: string, httpConfig: IHttpReqConfig): Promise<respType> {
  return new Promise<respType>((resolve, reject) => {
    axios(url, httpConfig)
      .then((response: AxiosResponse<respType>) => {
        resolve(response.data);
      })
      .catch((err: AxiosError) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          status: err.response?.status || EStatusErrorCode.GENERAL_ERROR,
          message: ERROR_MESSAGE[err.response?.status || EStatusErrorCode.GENERAL_ERROR],
        });
      });
  });
}

export default httpRequest;
