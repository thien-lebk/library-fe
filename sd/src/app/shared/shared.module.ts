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
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DropDownComponent } from './ag-grid/drop-down/drop-down.component';
import { CheckBoxTrueFalseComponent } from './ag-grid/check-box-true-false/check-box-true-false.component';
import { RemoveRowComponent } from './ag-grid/remove-row/remove-row.component';
import { LoadingCommonComponent } from './loading-common/loading-common.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DialogEditLbCardItemWithReviewComponent } from './library/lb-card-item-with-review/dialog-edit-lb-card-item-with-review/dialog-edit-lb-card-item-with-review.component';



@NgModule({
  declarations: [LbCardItemWithReviewComponent, LbFormCardComponent, HeaderComponent, FooterComponent, DropDownComponent, CheckBoxTrueFalseComponent, RemoveRowComponent, LoadingCommonComponent, DialogEditLbCardItemWithReviewComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        DropdownModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        LbCardItemWithReviewComponent,
        HeaderComponent,
        FooterComponent,
        LoadingCommonComponent
    ]
})
export class SharedModule { }
