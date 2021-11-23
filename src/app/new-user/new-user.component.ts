import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from '../shared/Users.service';
import { User } from '../shared/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @ViewChild('userNameInput') userName!: ElementRef;
  @ViewChild('emailInput') emailAddress!: ElementRef;
  @ViewChild('activeCheckInput') activeCheck!: ElementRef;
  @ViewChild('selectedRole') roleValue!: ElementRef;

  roleArray = ['user', 'editor', 'admin'];

  constructor(private usersService: UsersService) { }

  onAddUser() {
    const name = this.userName.nativeElement.value;
    const email = this.emailAddress.nativeElement.value;
    const active = this.activeCheck.nativeElement.checked;
    const role = this.roleValue.nativeElement.value;
    const newUser = new User(name, email, active, role);
    this.usersService.addUser(newUser);
    this.reset();
  }

  reset() {
    this.userName.nativeElement.value = '';
    this.emailAddress.nativeElement.value = '';
    this.activeCheck.nativeElement.checked = false;
    this.roleValue.nativeElement.value = 'Choose role';
  }


}
