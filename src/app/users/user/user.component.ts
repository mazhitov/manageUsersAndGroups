import { Component, Input } from '@angular/core';
import { User } from '../../shared/User.model';
import { GroupsService } from '../../shared/Groups.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input() user!:User;

  constructor(private groupService: GroupsService) {}

  getActiveText() {
    if(this.user.active) {
      return 'Active'
    }
    return 'Inactive'
  }

  onAddUserToGroup() {
    this.groupService.currentGroup.addUser(this.user);
  }

  getClassName() {
    return {
      'card': true,
      'mb-1': true,
      'group': this.groupService.currentGroup.users.includes(this.user),
    }
  }
}
