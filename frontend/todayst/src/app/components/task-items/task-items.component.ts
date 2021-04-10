import { TaskType } from '../../../types';
import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.scss']
})
export class TaskItemsComponent {
  @Input() public tasks: TaskType[] = [];

  constructor(private service: TaskService) {}

  onUpdate(id: number, status: boolean) {
    console.log(id);
    this.service.updateTask(id, { status });
  }

  onRemove(id: number): void {
    this.service.removeTask(id);
  }
}
