import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { TaskType, TaskInputType } from '../../../types';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject: BehaviorSubject<TaskType[]>;
  public tasksObservable: Observable<TaskType[]>;
  private initalData: TaskType[] = [];

  constructor(private service: BackendService) {
    this.tasksSubject = new BehaviorSubject(this.initalData);
    this.tasksObservable = this.tasksSubject.asObservable();
    this.sendDefaultMessage();
  }

  private async sendDefaultMessage(): Promise<void> {
    const tasks = await this.service.getTasksBackend().toPromise();
    this.tasksSubject.next(tasks);
  }

  public getTasks(): Observable<TaskType[]> {
    return this.tasksObservable;
  }

  public async addTask(task: TaskInputType): Promise<void> {
    this.service.addTaskBackend(task).subscribe(() => {
      this.sendDefaultMessage();
    });
  }

  public async updateTask(id: number, task: TaskInputType): Promise<void> {
    this.service.updateTaskBackend(id, task).subscribe(() => {
      this.sendDefaultMessage();
    });
  }

  public async removeTask(id: number): Promise<void> {
    this.service.removeTaskBackend(id).subscribe(() => {
      this.sendDefaultMessage();
    });
  }
}
