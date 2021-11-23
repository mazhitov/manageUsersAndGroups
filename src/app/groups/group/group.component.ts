import { Component, Input } from '@angular/core';
import { Group } from '../../shared/Group.model';
import { GroupsService } from '../../shared/Groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent  {
  @Input() group!:Group;
  constructor(private groupsService: GroupsService) {}

  onClickGroup() {
    this.groupsService.currentGroup.active = false;
    this.groupsService.currentGroup = this.group;
    this.groupsService.currentGroup.active = true;
    this.getClassName();
  }

  getClassName() {
    return {
      'card':true,
      'p-2':true,
      'mb-2': true,
      'group': this.group.active
    }
  }
}
