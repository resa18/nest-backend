import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property()
  email!: string;

  @Property({ type: 'date' })
  latestLogin!: Date;

  @Property()
  softDelete: boolean = false;
}
