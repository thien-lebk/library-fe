import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CssComponent} from './css/css.component';
import {LibraryComponent} from './library.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CssComponent, LibraryComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule {
}
