import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../modal/Question';
import {SubQuestionDto} from '../../../modal/SubQuestionDto';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() {
  }

  @Input() question: Question = new Question();
  @Input() idBook: number | undefined;
  favoriteSeason = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  showEditNotesBtn = 'Hiển thị ghi chú';
  showNoteEditNote = false;
  showAnswer = false;
  showAnswerBtn = 'Hiển thị đáp án';

  ngOnInit(): void {
    this.question.subQuestionList.forEach(ele => {
      ele.showAnswer = false;
    });
  }

  handleNode(): void {
    if (this.showNoteEditNote) {
      this.showEditNotesBtn = 'Ẩn ghi chú';
    } else {
      this.showEditNotesBtn = 'Hiển thị ghi chú';
    }
    this.showNoteEditNote = !this.showNoteEditNote;
  }

  saveEditNotes(): void {

  }

  openFormEditQuestion(): void {

  };

  handleShowAnswer(index: number): void {
    const q = this.question.subQuestionList[index];
    if (!q.showAnswer) {
      this.showAnswerBtn = 'Ẩn đáp án';
      this.question.subQuestionList[index].showAnswer = true;
    } else {
      this.showNoteEditNote = false;
      this.showEditNotesBtn = 'Hiển thị ghi chú';
      this.showAnswerBtn = 'Hiển thị đáp án';
      this.question.subQuestionList[index].showAnswer = false;
    }
  }
}
