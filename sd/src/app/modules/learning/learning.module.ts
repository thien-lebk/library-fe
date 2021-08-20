import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {learningRoutes} from './learning.routing';
import {RouterModule} from '@angular/router';
import {AgGridModule} from 'ag-grid-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import { QuizComponent } from './quiz/quiz.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [FormComponent, ListComponent, QuizComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(learningRoutes),
    AgGridModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatRadioModule,
    FormsModule
  ]
})
export class LearningModule { }
