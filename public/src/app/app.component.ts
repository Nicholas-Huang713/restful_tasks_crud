import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
// import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;
  task: any;
  title = 'Restful Tasks API';
  newTask: any;
  editTask: any;
  editTog: boolean = false;

  constructor(private _httpService: HttpService){}
 
  ngOnInit(){
    this.newTask = {title: "Go to Coscto", description: "Get hot dogs!"}
  }
 
  onSubmit(){
    this._httpService.addTask(this.newTask).subscribe(data=>{
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""};
      this.getTasksFromService();
    });
  }

  onEdit(){
    this._httpService.editTask(this.editTask).subscribe(data =>{
      console.log("editting task", data);
      this.getTasksFromService();
    })
  }

  onDelete(task){
    this._httpService.deleteTask(task).subscribe(data=>{
      console.log("~Delete~");
      this.getTasksFromService();
    })
  }

  getTasksFromService(){

    this._httpService.getTasks().subscribe(data =>{
      console.log("got all", data);
      this.tasks = data;
    })
  }
 
  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data =>{
      console.log("got an id", data);
      this.task = data;
    })
  }

  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }
}
