import { Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {LearningDetalComponent} from './learning-detal/learning-detal.component';

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
          title: 'Danh sách khoá học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      },
      {
        path: 'detail',
        component: LearningDetalComponent,
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
          title: 'Tag khóa học',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      }
    ]
  }
];
