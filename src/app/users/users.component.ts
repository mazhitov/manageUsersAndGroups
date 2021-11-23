import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/Users.service';
import { User } from '../shared/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.usersService.usersChange.subscribe((users: User[]) => {
      this.users = users;
    });
  }

}
