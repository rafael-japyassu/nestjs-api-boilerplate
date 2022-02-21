import { IHashProvider } from '@domain/shared/providers/hash-provider';
import { randomUUID } from 'crypto';

export class HashProviderInMemory implements IHashProvider {
  async hash(payload: string): Promise<string> {
    return `${payload}${randomUUID()}`;
  }

  async compare(payload: string, hash: string): Promise<boolean> {
    return payload === hash;
  }
}
