import { EntitySchema } from '@mikro-orm/core';
import { User } from '../entities/user.entity';

export class UserEntity extends EntitySchema<User> {
  constructor() {
    super({
      class: User,
      tableName: 'users',
      properties: {
        id: { type: 'uuid', primary: true },
        email: { type: 'string' },
        latestLogin: { type: 'date' },
        softDelete: { type: 'boolean', default: false },
      },
    });
  }
}
