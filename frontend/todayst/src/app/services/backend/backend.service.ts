import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskType, TaskInputType, DoneType } from '../../../types';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}

  public getTasksBackend(): Observable<TaskType[]> {
    return this.http.get<TaskType[]>('/api/tasks');
  }

  public addTaskBackend(task: TaskInputType): Observable<DoneType> {
    return this.http.post<DoneType>('/api/task', task);
  }

  public removeTaskBackend(id: number): Observable<DoneType> {
    return this.http.delete<DoneType>(`/api/task/delete/${id}`);
  }

  public updateTaskBackend(id: number, task: TaskInputType): Observable<DoneType> {
    return this.http.put<DoneType>(`/api/task/update/${id}`, task);
  }
}
