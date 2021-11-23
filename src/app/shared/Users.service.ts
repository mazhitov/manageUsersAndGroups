import { User } from './User.model';

export class UsersService {
  private users: User[] = [
    new User('admin', 'admin@mail.ru', false,'admin'),
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    const existingUser = this.users.find(user => user === user);
    if(!existingUser) {
      this.users.push(user);
    }
  }
}
