import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-check-box-true-false',
  templateUrl: './check-box-true-false.component.html',
  styleUrls: ['./check-box-true-false.component.scss']
})
export class CheckBoxTrueFalseComponent implements ICellRendererAngularComp, OnDestroy {

  public params: any;



  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event: any): void {
    const checked = event.target.checked;
    const colId = this.params.column.colId;
    this.params.node.setDataValue(colId, checked);

  }
  refresh(param: ICellRendererParams): boolean {
    // throw new Error('Method not implemented.');
    return param.value;
  }

  ngOnDestroy(): void {
  }
}
