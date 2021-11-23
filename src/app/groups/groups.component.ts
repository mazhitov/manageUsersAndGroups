import { Component, OnInit } from '@angular/core';
import { Group } from '../shared/Group.model';
import { GroupsService } from '../shared/Groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.groups = this.groupsService.getGroups();
    this.groupsService.groupsChange.subscribe((groups:Group[])=>{
      this.groups = groups;
    });
  }

}
