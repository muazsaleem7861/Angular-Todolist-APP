import { Component, OnInit,EventEmitter, Output, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
 title:string | undefined
 des:string |undefined
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo ={
      sno:8,
      title: this.title,
      des:this.des,
      active:true

    }
    this.todoAdd.emit(todo)
  }


}
