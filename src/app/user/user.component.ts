import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  //Below code is for input signals
  // user = input.required<any>()
  // ImagePath = computed(()=>{
  //   return '../../app/assets/users/users/' + this.user().avatar
  // })

  @Input({required: true}) user!:any;
  @Output() selectedUser = new EventEmitter()
  get ImagePath(){
    return '../../app/assets/users/users/' + this.user.avatar
  }

  onSelectingUser(){
    this.selectedUser.emit(this.user);
    
  }
  

}
