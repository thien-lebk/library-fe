import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../../../services/learning/book.service';
import {BookDto} from '../../../modal/Book';
import {ChapterDto} from '../../../modal/ChapterDto';
import {GridApi} from 'ag-grid-community';
import {AgGridColumn} from 'ag-grid-angular';
import {SubQuestionDto} from '../../../modal/SubQuestionDto';
import {SelectAnswerDto} from '../../../modal/SelectAnswerDto';
import {Question} from '../../../modal/Question';
import {QuestionService} from '../../../services/learning/question.service';
import {QuestionDto} from '../../../modal/QuestionDto';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-quiz-form',
  templateUrl: './add-quiz-form.component.html',
  styleUrls: ['./add-quiz-form.component.scss']
})
export class AddQuizFormComponent implements OnInit {
  idChapter: number | undefined;

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  question: Question = new Question();


  checkoutForm = this.formBuilder.group({
    title: '',
    question: '',
    imgSrc: '',
    answer: '',
    type: ''
  });
  returnStatus = '';
  listSubQuestion: SubQuestionDto[] = [];
  listSubQuestionRemove: SubQuestionDto[] = [];


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
  idQuestion = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.idChapter) {
        this.idChapter = params.idChapter;
      } else {
        this.idQuestion = params.idQuestion;
        this.questionService.getDetail(this.idQuestion).subscribe(ele => {
          this.question = ele.data;
          this.listSubQuestion = this.question.subQuestionList;
          this.checkoutForm.patchValue(this.question);
          this.listSubQuestion.forEach(data => {
            const formBuilder = this.formBuilder.group({
              title: '',
              question: '',
              imgSrc: '',
              correctAnswer: '',
            });
            formBuilder.patchValue(data);
            data.formBuilder = formBuilder;
          });
          console.log(this.listSubQuestion);
        });
      }
    });
  }

  changeForm(data: any): void {
    // console.log(data);
  }

  addSubQuestion(): void {
    this.listSubQuestion.unshift(new SubQuestionDto());
    this.listSubQuestion[0].formBuilder = this.formBuilder.group({
      title: '',
      question: '',
      imgSrc: '',
      correctAnswer: '',
    });
  }

  onSubmit(): void {
    if (this.idChapter) {
      this.question = this.checkoutForm.value;
      this.listSubQuestion.forEach((value: SubQuestionDto, index: number) => {
        value.title = value.formBuilder.value.title;
        value.imgSrc = value.formBuilder.value.imgSrc;
        value.correctAnswer = value.formBuilder.value.correctAnswer;
        value.question = value.formBuilder.value.question;
        value.formBuilder = undefined;
        value.gripApi = undefined;
        value.gridComlumnApi = undefined;
      });
      this.question.subQuestionList = this.listSubQuestion;
      const questionDto = new QuestionDto();
      questionDto.idChapter = this.idChapter;
      questionDto.question = this.question;
      this.questionService.create(questionDto).subscribe(ele => {
        if (ele.status === 200) {
          console.log('success');
        }
      });
    } else {

      const submitQuestion = new Question();
      submitQuestion.title = this.checkoutForm.value.title;
      submitQuestion.question = this.checkoutForm.value.question;
      submitQuestion.imgSrc = this.checkoutForm.value.imgSrc;
      submitQuestion.correctAnswer = this.checkoutForm.value.correctAnswer;
      submitQuestion.id = String(this.idQuestion);
      this.listSubQuestion.forEach((value, index) => {
        const data = value.formBuilder.value;
        console.log(value);
        console.log(data);
        submitQuestion.subQuestionList[index] = new SubQuestionDto();
        console.log(submitQuestion.subQuestionList[index]);
        submitQuestion.subQuestionList[index].id = value.id;
        submitQuestion.subQuestionList[index].imgSrc = data.imgSrc;
        submitQuestion.subQuestionList[index].question = data.question;
        submitQuestion.subQuestionList[index].showAnswer = data.showAnswer;
        submitQuestion.subQuestionList[index].selectAnswerList = data.selectAnswerList;
        submitQuestion.subQuestionList[index].correctAnswer = data.correctAnswer;
        submitQuestion.subQuestionList[index].title = data.title;
        submitQuestion.subQuestionList[index].selectAnswerList = data.selectAnswerList;
      });
      console.log(submitQuestion);
      this.questionService.update(submitQuestion).subscribe(ele => {
        if (ele.status === 200) {
          console.log('success');
        }
      });
    }

  }

  onGridReady(params: any, index: number): void {
    this.listSubQuestion[index].gripApi = params.api;
    this.listSubQuestion[index].gridComlumnApi = params.columnApi;
  }

  addAnswer(i: number): void {
    const selectAns: SelectAnswerDto = new SelectAnswerDto();
    selectAns.content = '';
    selectAns.isAnswer = false;
    this.listSubQuestion[i].selectAnswerList.unshift(selectAns);
    // @ts-ignore
    this.listSubQuestion[i].gripApi.setRowData(this.listSubQuestion[i].selectAnswerList);
    // @ts-ignore
    this.listSubQuestion[i].gripApi.refreshCells();

  }

  removeSubQuestion(index: number): void {
    if (this.listSubQuestion[index].id) {
      this.listSubQuestionRemove.push(this.listSubQuestion[index]);
    }
    this.listSubQuestion.splice(index, 1);
  }
}
