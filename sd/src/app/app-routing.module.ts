import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LibraryComponent} from './modules/library/library.component';
import {LbFormCardComponent} from './shared/library/lb-form-card/lb-form-card.component';

const routes: Routes = [];

// <app-library></app-library>

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot([
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: LibraryComponent},
    {path: 'add', component: LbFormCardComponent},
    {
      path: 'learning',
      loadChildren: () => import('./modules/learning/learning.module').then(m => m.LearningModule)
    },
  ])],
  exports: [RouterModule],

})
export class AppRoutingModule {


}
