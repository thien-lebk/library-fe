import { Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {LearningDetalComponent} from './learning-detail/learning-detal.component';
import {QuizComponent} from './quiz/quiz.component';
import {AddQuizFormComponent} from './add-quiz-form/add-quiz-form.component';

export const learningRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'Chi tiết khoá học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'add',
        component: FormComponent,
        data: {
          title: 'Add khóa học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'detail/:id',
        component: LearningDetalComponent,
        data: {
          title: 'Detail khóa học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'quiz',
        component: QuizComponent,
        data: {
          title: 'Detail khóa học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'add-quiz/:idChapter',
        component: AddQuizFormComponent,
        data: {
          title: 'Thêm quiz',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'edit-quiz/:idQuestion',
        component: AddQuizFormComponent,
        data: {
          title: 'Thêm quiz',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      }
    ]
  }
];
