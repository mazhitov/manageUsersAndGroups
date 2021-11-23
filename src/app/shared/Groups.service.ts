import { EventEmitter } from '@angular/core';
import { Group } from './Group.model';

export class GroupsService {
  groupsChange = new EventEmitter<Group[]>();
  currentGroup:Group = new Group('', []);

  private groups: Group[] = [
    new Group('Hiking group', []),
    new Group('Book club', []),
  ];

  getGroups() {
    return this.groups.slice();
  }

  addGroup(group:Group) {
    const existingGroup = this.groups.find(groupItem => groupItem.name === group.name);
    if(!existingGroup) {
      this.groups.push(group);
    }
    this.groupsChange.emit(this.groups);
  }
}
