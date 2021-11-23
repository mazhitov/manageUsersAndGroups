import { User } from './User.model';

export class Group {
  constructor(
    public name: string,
    public users:User[],
    public active = false
  ) {}
}
