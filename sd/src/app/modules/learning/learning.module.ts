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
import { AddQuizFormComponent } from './add-quiz-form/add-quiz-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormSubQuestionComponent } from './add-quiz-form/form-sub-question/form-sub-question.component';



@NgModule({
    declarations: [FormComponent, ListComponent, QuizComponent, AddQuizFormComponent, FormSubQuestionComponent],
    exports: [
        QuizComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(learningRoutes),
        AgGridModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        SharedModule,
        MatRadioModule,
        FormsModule,
        MatExpansionModule,
        MatFormFieldModule
    ]
})
export class LearningModule { }
