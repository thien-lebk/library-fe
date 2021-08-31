import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LibraryComponent} from './modules/library/library.component';
import {LbFormCardComponent} from './shared/library/lb-form-card/lb-form-card.component';
import {AuthGuardService} from './_helper/auth-guard.service';
import {LoginComponent} from './modules/account/login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot([
    { path: '', component: LibraryComponent,canActivate: [AuthGuardService] },
    { path: 'account/login', component: LoginComponent },
    // { path: '**', redirectTo: '' },
    {path: 'dashboard', component: LibraryComponent, canActivate: [AuthGuardService]},
    {path: 'add', component: LbFormCardComponent, canActivate: [AuthGuardService]},
    {path: 'user',
      loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
    },
    {
      path: 'learning',
      loadChildren: () => import('./modules/learning/learning.module').then(m => m.LearningModule), canActivate: [AuthGuardService]
    },
  ])],
  exports: [RouterModule],

})
export class AppRoutingModule {


}
