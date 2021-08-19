import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {learningRoutes} from './learning.routing';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(learningRoutes)
  ]
})
export class LearningModule { }
