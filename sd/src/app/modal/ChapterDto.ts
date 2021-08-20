import {ExerciseDto} from './ExerciseDto';

export class ChapterDto {
  title?: string;
  description?: string;
  id?: number;
  imgSrc?: string;
  exerciseList: ExerciseDto[] = [];
}
