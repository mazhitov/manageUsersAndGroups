import { Component, Input } from '@angular/core';
import { User } from '../../shared/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input() user!:User;

  getActiveText() {
    if(this.user.active) {
      return 'active'
    }
    return 'inactive'
  }
}
