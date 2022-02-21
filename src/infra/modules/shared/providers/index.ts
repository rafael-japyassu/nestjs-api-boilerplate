import { Provider } from '@nestjs/common';
import { HASH_PROVIDER, HTTP_ERROR_PROVIDER } from '../constants';
import { BcryptProvider } from '../implementations/bcrypt.provider';
import { HttpErrorProvider } from '../implementations/http-error.provider';

export const sharedProviders: Provider[] = [
  {
    provide: HASH_PROVIDER,
    useClass: BcryptProvider,
  },
  {
    provide: HTTP_ERROR_PROVIDER,
    useClass: HttpErrorProvider,
  },
];
