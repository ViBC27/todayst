import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Modules and Services
import { IconsModule } from './components/icons/icons.module';
import { BackendService } from './services/backend/backend.service';

// Components
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskItemsComponent } from './components/task-items/task-items.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';

@NgModule({
  declarations: [AppComponent, TaskFormComponent, TaskComponent, TaskItemsComponent, TaskModalComponent],
  imports: [HttpClientModule, BrowserModule, ReactiveFormsModule, IconsModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
