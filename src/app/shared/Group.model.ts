import { User } from './User.model';

export class Group {
  constructor(
    public users:User[]
  ) {}
}
