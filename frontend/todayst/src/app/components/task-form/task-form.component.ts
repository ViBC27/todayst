import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: TaskService) {
    this.form = this.configureFormGroup();
  }

  configureFormGroup(): FormGroup {
    return this.formBuilder.group({
      status: [false],
      task: [''],
      time: ['']
    });
  }

  formReset(): void {
    this.form.controls['task'].setValue('');
    this.form.controls['time'].setValue('');
    this.form.controls['status'].setValue(false);
  }

  onSubmit(): void {
    this.service.addTask(this.form.value);
    this.formReset();
  }
}
