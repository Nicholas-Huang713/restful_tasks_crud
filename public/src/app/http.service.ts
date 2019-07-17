import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();   
  } 
 
  getTasks(){
    return this._http.get('/task');
  }

  getTask(id){
    return this._http.get('/task/'+id); 
  }

  addTask(newtask){
    return this._http.post('/task/create', newtask);
  }

  editTask(editTask){
    return this._http.put(`/task/edit/${editTask._id}`, editTask);
  }

  deleteTask(task){
    return this._http.delete(`/task/delete/${task._id}`, task);
  }
}
