import { User } from './User.model';

export class UsersService {
  private users: User[] = [
    new User('admin', 'admin@mail.ru', false,'admin'),
  ];

  getUsers() {
    return this.users.slice();
  }
}
