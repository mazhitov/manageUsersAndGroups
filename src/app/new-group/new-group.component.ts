import { Component, ElementRef, ViewChild } from '@angular/core';
import { GroupsService } from '../shared/Groups.service';
import { Group } from '../shared/Group.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent {
  @ViewChild('groupNameInput') groupName!:ElementRef;
  constructor(private groupsService: GroupsService) {}

  onAddGroup() {
    const groupName = this.groupName.nativeElement.value;
    const newGroup = new Group(groupName, []);
    this.groupsService.addGroup(newGroup);
    this.reset();
  }

  reset() {
    this.groupName.nativeElement.value = '';
  }
}
