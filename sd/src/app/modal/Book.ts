import {ChapterDto} from './ChapterDto';

export class BookDto {
  title = '';
  description = '';
  id = '';
  imgSrc = '';
  chapterList: ChapterDto[] = [];
}
