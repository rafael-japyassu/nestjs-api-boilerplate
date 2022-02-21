import { IHashProvider } from '@domain/shared/providers/hash-provider';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptProvider implements IHashProvider {
  async hash(payload: string): Promise<string> {
    return bcrypt.hash(payload, 8);
  }

  async compare(payload: string, hash: string): Promise<boolean> {
    return bcrypt.compare(payload, hash);
  }
}
