import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SubQuestionDto} from '../../../../modal/SubQuestionDto';
import {GridApi} from 'ag-grid-community';
import {AgGridColumn} from 'ag-grid-angular';
import {SelectAnswerDto} from '../../../../modal/SelectAnswerDto';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-sub-question',
  templateUrl: './form-sub-question.component.html',
  styleUrls: ['./form-sub-question.component.scss']
})
export class FormSubQuestionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
  ) {
  }

  @Output() subQuestionReturn = new EventEmitter<SubQuestionDto>();
  @Input() subQuestion: SubQuestionDto = new SubQuestionDto();
  @Output() indexRemove = new EventEmitter<number>();
  @Input() indexAdd = 1;

  columnDefsSelectAnswerList = [

    {
      headerName: 'Content', field: 'content', sortable: true, filter: true, editable: true, resizable: true
    },
    {
      headerName: 'Is Answer ?', field: 'isAnswer', sortable: true, filter: true, editable: true, resizable: true
    },
    {
      headerName: 'Image', field: 'imgSrc', sortable: true, filter: true, editable: true, resizable: true
    }
  ];
  private gridApi: GridApi | undefined;
  private gridColumnApi: AgGridColumn | undefined;
  formSubQuestion = this.formBuilder.group({
    title: '',
    question: '',
    imgSrc: '',
    correctAnswer: '',
  });

  ngOnInit(): void {
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  addAnswer(i: number): void {
    const selectAns: SelectAnswerDto = new SelectAnswerDto();
    selectAns.content = '';
    selectAns.isAnswer = false;
    this.subQuestion.selectAnswerList.push(selectAns);
    this.gridApi?.addItems(this.subQuestion.selectAnswerList);
    this.gridApi?.refreshCells();
  }

  removeSubQuestion(i: number): number {
    this.indexRemove.emit(i);
    return i;
  }

  onChangeForm(): void {
    this.formSubQuestion.valueChanges.subscribe(val => {
      console.log(val);
      this.subQuestionReturn.emit(val);
    });
  }
}
