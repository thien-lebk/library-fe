export class LibCardDto {
  constructor(datum: any[]) {
    this.title = datum[0];
    this.imgSrc = datum[1];
    this.description = datum[2];
    this.postSrc = datum[3];
  }
  'title' = '';
  'description' = '';
  'postSrc' = '';
  'imgSrc' = '';
}
