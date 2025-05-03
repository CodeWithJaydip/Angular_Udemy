import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user:any = {};
  isNewTaskAdding:boolean = false;
  constructor(private taskService:TaskService){}

  get selectedUserTask(){
    return this.taskService.getUserTask(this.user?.id)
  }
  OnCompletionTask(taskId:string){
    this.taskService.removeTask(taskId);
  }
  addNewTask(){
    this.isNewTaskAdding = true;
  }
  onCloseDialog(){
    this.isNewTaskAdding = false;
  }
  onAddingNewTask(newTask:NewTask){
    this.taskService.addTask(newTask,this.user.id);
    this.onCloseDialog();
  }

}
