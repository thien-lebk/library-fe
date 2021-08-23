import {SubQuestionDto} from './SubQuestionDto';
import {SelectAnswerDto} from './SelectAnswerDto';

export class Question {
  title?: string;
  question?: string;
  correctAnswer?: string;
  id?: string;
  imgSrc?: string;
  subQuestionList: SubQuestionDto[] = [];
  isActive = false;
  listRemoveSelectAnswer: SelectAnswerDto[] = [];
}
