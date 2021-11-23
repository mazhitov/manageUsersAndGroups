import { Component } from '@angular/core';
import { GroupsService } from '../shared/Groups.service';
import { Group } from '../shared/Group.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  groupName = '';

  constructor(private groupsService: GroupsService) {}

  onAddGroup() {
    const newGroup = new Group(this.groupName, []);
    this.groupsService.addGroup(newGroup);
    this.reset();
  }

  reset() {
    this.groupName = '';
  }
}
