import { TaskType } from '../../../types';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {
  public form!: FormGroup;
  @Input() public task!: TaskType;
  @Input() public idOfModal?: string;
  @Input() public titleOfModal?: string;

  constructor(private formBuilder: FormBuilder, private service: TaskService) {}

  ngOnInit(): void {
    this.form = this.configureFormGroup();
  }

  configureFormGroup(): FormGroup {
    return this.formBuilder.group({
      status: [this.task.status],
      task: [this.task.task],
      time: [this.task.time]
    });
  }

  onRemove(): void {
    this.service.removeTask(this.task.id);
  }

  onUpdate(): void {
    this.service.updateTask(this.task.id, this.form.value);
  }
}
