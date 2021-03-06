import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <input
        type="checkbox"
        [checked]="todo.isCompleted"
        (change)="toggleCompleted($event)">
      <span
        [class.completed]="todo.isCompleted"
        [textContent]="todo.title"></span>
      <button
        *ngIf="!todo.isArchived"
        (click)="archive()">Archive</button>
    </div>
  `,
  styles: [`
    .completed {
      text-decoration: line-through;
      color: gray;
    }
  `]
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() archived: EventEmitter<Todo> = new EventEmitter();

  toggleCompleted(checkbox) {
    this.todo.isCompleted = checkbox.target.checked;
  }

  archive() {
    this.todo.isArchived = true;
    this.archived.emit(this.todo);
  }
}
