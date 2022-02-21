import { HttpError } from '../types/http-error';

export interface IHttpErrorProvider {
  error(data: HttpError): void;
}
