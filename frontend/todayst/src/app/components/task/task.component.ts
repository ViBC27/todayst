import { TaskType } from '../../../types';
import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() public tasks: TaskType[] = [];
  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
