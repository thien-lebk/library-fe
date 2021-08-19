import {TopicDto} from './TopicDto';

export class PostDto {

  title?: string;
  description?: string;
  id?: number;
  imgSrc?: string;
  postSrc?: string;
  listId: number[] = [];
  newTopic: TopicDto[] = [];
}
