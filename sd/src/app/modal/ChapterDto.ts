import {Question} from './Question';

export class ChapterDto {
  title?: string;
  description?: string;
  id?: number;
  imgSrc?: string;
  questionList: Question[] = [];
}
