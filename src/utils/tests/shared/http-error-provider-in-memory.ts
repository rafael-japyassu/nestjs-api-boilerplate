import { IHttpErrorProvider } from '@domain/shared/providers/http-error-provider';
import { HttpError } from '@domain/shared/types/http-error';

export class HttpErrorProviderInMemory implements IHttpErrorProvider {
  error(data: HttpError): void {
    throw new Error(JSON.stringify(data));
  }
}
