export interface ICrudRepository<T = unknown> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | undefined>;
  create(data: Omit<T, 'id'>): Promise<T | void>;
  update(data: T): Promise<T | void>;
}
