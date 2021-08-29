import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SubQuestionDto} from '../../../modal/SubQuestionDto';
import {SelectAnswerDto} from '../../../modal/SelectAnswerDto';
import {Question} from '../../../modal/Question';
import {QuestionService} from '../../../services/learning/question.service';
import {QuestionDto} from '../../../modal/QuestionDto';
import {ActivatedRoute} from '@angular/router';
import {CheckBoxTrueFalseComponent} from '../../../shared/ag-grid/check-box-true-false/check-box-true-false.component';
import {RemoveRowComponent} from '../../../shared/ag-grid/remove-row/remove-row.component';
import {AlertService} from '../../../services/alert/alertService';
import {LoadingService} from '../../../services/loadingService';


@Component({
  selector: 'app-add-quiz-form',
  templateUrl: './add-quiz-form.component.html',
  styleUrls: ['./add-quiz-form.component.scss']
})
export class AddQuizFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private questionService: QuestionService,
              private activatedRoute: ActivatedRoute,
              private alertService: AlertService,
              private loadingService: LoadingService,
  ) {
  }



  idChapter: number | undefined;

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
      headerName: '', field: 'remove',
      cellRenderer: 'removeRow',
      cellRendererParams: {
        onClick: this.removeRowAction.bind(this)
      },
      resizable: true,
      width: 70,
    },
    {
      headerName: 'Content', field: 'content', sortable: true, filter: true, editable: true, resizable: true
    },
    {
      headerName: 'Answer', field: 'isAnswer',
      cellRenderer: 'checkboxtruefalse',
      resizable: true,
      width: 100,
    },
    {
      headerName: 'Image', field: 'imgSrc', sortable: true, filter: true, editable: true, resizable: true
    }
  ];
  frameworkComponents = {
    checkboxtruefalse: CheckBoxTrueFalseComponent,
    removeRow: RemoveRowComponent
  };
  idQuestion = '';
  listRemoveSelectAnswer: SelectAnswerDto[] = [];

  removeRowAction(data: any): void {
    if (data.data.id) {
      this.listRemoveSelectAnswer.push(data.data);
      this.question.subQuestionList.forEach(ele => {
        ele.selectAnswerList = ele.selectAnswerList.filter(ele2 => {
          return ele2.id !== data.data.id;
        });
      });
    }
  }

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.activatedRoute.params.subscribe(params => {
      if (params.idChapter) {
        this.idChapter = params.idChapter;
        this.loadingService.stopLoading();
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
          this.loadingService.stopLoading();

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
      console.log(this.question);
      console.log(this.listSubQuestion);
      console.log(this.question.subQuestionList);

      this.question.subQuestionList.forEach((value, index) => {
        const data = value.formBuilder.value;
        submitQuestion.subQuestionList[index] = new SubQuestionDto();
        submitQuestion.subQuestionList[index].id = value.id;
        submitQuestion.subQuestionList[index].imgSrc = data.imgSrc;
        submitQuestion.subQuestionList[index].question = data.question;
        submitQuestion.subQuestionList[index].showAnswer = data.showAnswer;
        submitQuestion.subQuestionList[index].correctAnswer = data.correctAnswer;
        submitQuestion.subQuestionList[index].title = data.title;
        submitQuestion.subQuestionList[index].selectAnswerList = value.selectAnswerList;
      });

      this.questionService.update(submitQuestion, this.listRemoveSelectAnswer).subscribe(ele => {
        if (ele.status === 200) {
          console.log('success');
        }
      });
    }

  }
  addAlert(): void {
    this.alertService.success('Test Alert');
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
