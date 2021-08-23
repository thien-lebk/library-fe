import {SelectAnswerDto} from './SelectAnswerDto';
import {GridApi} from 'ag-grid-community';
import {AgGridColumn} from 'ag-grid-angular';

export class SubQuestionSubmit {
  id?: number;
  title?: string;
  question?: string;
  correctAnswer?: string;
  imgSrc?: string;
  selectAnswerList: SelectAnswerDto[] = [];


}
