import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../modal/Question';

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

  handleShowAnswer(): void {
    if (this.showAnswer) {
      this.showAnswerBtn = 'Ẩn đáp án';
    } else {
      this.showNoteEditNote = false;
      this.showEditNotesBtn = 'Hiển thị ghi chú';
      this.showAnswerBtn = 'Hiển thị đáp án';
    }
    this.showAnswer = !this.showAnswer;
  }
}
