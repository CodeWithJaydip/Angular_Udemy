import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[2];

  onSelectingUser(){
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
  get ImagePath(){
    debugger;
    return '../../app/assets/users/users/' + this.selectedUser.avatar
  }

}
