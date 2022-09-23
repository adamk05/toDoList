import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './ToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'toDoList';
  toDoList: ToDoItem[] = [];
  name2add: string = '';

  ngOnInit(): void {
    
  }

  changeItemStatus(i: number): void{
    if(this.toDoList[i].done){
      this.toDoList[i].done = false;
    }
    else{
      this.toDoList[i].done = true;
    }
  }

  addTask(): void{
    this.toDoList.push(new ToDoItem(this.name2add));
    this.name2add = '';
  }

  deleteItem(i: number): void{
    this.toDoList.splice(i, 1);
  }
}
