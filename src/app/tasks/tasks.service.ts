import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy_tasks";
import { NewTask } from "./new-task/new-task.model";
@Injectable({providedIn:'root'})
export class TaskService{

   private tasks = dummyTasks;

   getUserTask(userId:string){
    return this.tasks.filter((task) => task.userId === userId)
   }
   addTask(newTask:NewTask, userId:string){
    this.tasks.push({
        id: new Date().getTime().toString(),
        userId:userId,
        title : newTask.Title,
        summary:newTask.Summary,
        dueDate:newTask.Date
      })
   }

   removeTask(taskId:string){
    this.tasks= this.tasks.filter(task => task.id !== taskId);
   }
}