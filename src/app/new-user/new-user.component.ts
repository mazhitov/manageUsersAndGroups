import { Component } from '@angular/core';
import { UsersService } from '../shared/Users.service';
import { User } from '../shared/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  name = '';
  email = '';
  active = false;
  role = 'Choose role';
  roleArray = ['user', 'editor', 'admin'];

  constructor(private usersService: UsersService) {}

  onAddUser() {
    const newUser = new User(this.name, this.email, this.active, this.role);
    this.usersService.addUser(newUser);
    this.reset();
  }

  reset() {
    this.name = '';
    this.active = false;
    this.email = '';
    this.role = 'Choose role';
  }


  getDisabled() {
    return this.name === '' || this.email === '' || this.role === 'Choose role';
  }
}
