import {SelectAnswerDto} from './SelectAnswerDto';
import {GridApi} from 'ag-grid-community';
import {AgGridColumn} from 'ag-grid-angular';

export class SubQuestionDto {
  id?: number;
  title?: string;
  question?: string;
  correctAnswer?: string;
  imgSrc?: string;
  selectAnswerList: SelectAnswerDto[] = [];
  formBuilder: any;
  gripApi?: GridApi;
  gridComlumnApi?: AgGridColumn;
  showAnswer = false;
}
