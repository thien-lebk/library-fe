import {SubQuestionDto} from './SubQuestionDto';

export class Question {
  title?: string;
  question?: string;
  correctAnswer?: string;
  id?: string;
  imgSrc?: string;
  subQuestionList: SubQuestionDto[] = [];
  isActive = false;
}
