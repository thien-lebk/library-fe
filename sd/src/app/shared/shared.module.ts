import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LbCardItemWithReviewComponent } from './library/lb-card-item-with-review/lb-card-item-with-review.component';
import { LbFormCardComponent } from './library/lb-form-card/lb-form-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import {RouterModule} from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [LbCardItemWithReviewComponent, LbFormCardComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DropdownModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  exports: [
    LbCardItemWithReviewComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
