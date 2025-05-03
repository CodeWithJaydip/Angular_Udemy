import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from './new-task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() closeDialog = new EventEmitter();
  @Output() addNewTask = new EventEmitter<NewTask>();
  newTask:NewTask={
    Title:'',
    Summary:'',
    Date:''
  }

  onCloseDialog(){
this.closeDialog.emit()
  }
  onSubmit(){
    this.addNewTask.emit(this.newTask)
  }

}
