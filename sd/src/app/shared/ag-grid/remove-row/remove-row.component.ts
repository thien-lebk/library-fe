import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-remove-row',
  templateUrl: './remove-row.component.html',
  styleUrls: ['./remove-row.component.scss']
})
export class RemoveRowComponent implements ICellRendererAngularComp {

  public params: any;


  agInit(params: any): void {
    this.params = params;
  }

  refresh(param: ICellRendererParams): boolean {
    // throw new Error('Method not implemented.');
    return true;
  }

  btnClickedHandler(event: any): void {
    console.log(this.params);
    this.params.node.parent.gridApi.applyTransaction({remove: [this.params.data]});
    this.params.onClick(this.params);
  }

}
