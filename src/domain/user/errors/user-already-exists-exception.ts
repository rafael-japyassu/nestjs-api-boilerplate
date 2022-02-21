import { HttpStatusCode } from '@domain/shared/enums/http-status-code';
import { IHttpErrorProvider } from '@domain/shared/providers/http-error-provider';

export class UserAlreadyExistsException {
  constructor(readonly httpError: IHttpErrorProvider) {
    httpError.error({
      response: 'User already exists.',
      status: HttpStatusCode.BAD_REQUEST,
    });
  }
}
