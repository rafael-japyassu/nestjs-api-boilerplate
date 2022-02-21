import { IHttpErrorProvider } from '@domain/shared/providers/http-error-provider';
import { HttpError } from '@domain/shared/types/http-error';
import { HttpException } from '@nestjs/common';

export class HttpErrorProvider implements IHttpErrorProvider {
  error({ response, status }: HttpError): void {
    throw new HttpException(response, status);
  }
}
