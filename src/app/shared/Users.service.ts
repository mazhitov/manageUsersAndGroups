import { User } from './User.model';
import { EventEmitter } from '@angular/core';

export class UsersService {
  usersChange = new EventEmitter<User[]>();
  private users: User[] = [
    new User('admin', 'admin@mail.ru', true,'admin'),
    new User('vasya', 'vasya@mail.ru', false,'user'),
    new User('lena', 'lena@mail.ru', false,'editor'),
    new User('john', 'john@mail.ru', true,'user'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    const existingUser = this.users.find(userItem => userItem.name ===user.name && userItem.email ===user.email);
    if(!existingUser) {
      this.users.push(user);
    }
    this.usersChange.emit(this.users);
  }
}
