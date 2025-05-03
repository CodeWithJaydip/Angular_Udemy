import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task?:Task;
  @Output() taskCompleted = new EventEmitter<any>();

  completeTask(){ 
    this.taskCompleted.emit(this.task?.id)
  }

}
