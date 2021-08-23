import {SubQuestionDto} from './SubQuestionDto';
import {Question} from './Question';
import {SelectAnswerDto} from './SelectAnswerDto';

export class QuestionDto {
  idChapter?: number;
  question?: Question;
  listAnswerRemove?: SelectAnswerDto[];
}
