import { User } from './User.model';

export class Group {
  constructor(
    public name: string,
    public users:User[],
    public active = false
  ) {}

  addUser(user: User) {
    const existingUser = this.users.includes(user);
    if(!existingUser) {
      this.users.push(user);
    }
  }
}
