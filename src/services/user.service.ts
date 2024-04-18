import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly em: EntityManager) {}

  async createUser(userData: User): Promise<User> {
    const user = new User();
    user.id = uuidv4();
    user.email = userData.email;
    user.latestLogin = userData.latestLogin;
    await this.em.persistAndFlush(user);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.em.find(User, {});
  }

  async getUserById(id: string): Promise<User | null> {
    return this.em.findOne(User, { id });
  }
}
