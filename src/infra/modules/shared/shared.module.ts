import { Global, Module } from '@nestjs/common';
import { sharedProviders } from './providers';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: sharedProviders,
  exports: sharedProviders,
})
export class SharedModule {}
