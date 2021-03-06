import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {LibraryModule} from './modules/library/library.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LearningDetalComponent } from './modules/learning/learning-detail/learning-detal.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import { FormSubQuestionComponent } from './modules/add-quiz-form/form-sub-question/form-sub-question.component';
import {LearningModule} from './modules/learning/learning.module';
import {RemoveRowComponent} from './shared/ag-grid/remove-row/remove-row.component';
import {AlertModule} from './alert/alert.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LearningDetalComponent,
    FormSubQuestionComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        LibraryModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatInputModule,
        MatRadioModule,
        AgGridModule.withComponents([RemoveRowComponent]),
        MatExpansionModule,
        LearningModule,
        AlertModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      NgbModule
    ],
  providers: [MatDatepickerModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
