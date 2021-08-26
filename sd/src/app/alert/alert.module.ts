import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBasicComponent } from './alert-basic/alert-basic.component';



@NgModule({
    declarations: [AlertBasicComponent],
    exports: [
        AlertBasicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AlertModule { }
