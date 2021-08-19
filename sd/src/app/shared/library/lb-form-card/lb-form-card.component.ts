import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {PostService} from '../../../services/library/post.service';
import {TopicDto} from '../../../modal/TopicDto';
import {PostDto} from '../../../modal/PostDto';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-lb-form-card',
  templateUrl: './lb-form-card.component.html',
  styleUrls: ['./lb-form-card.component.scss']
})
export class LbFormCardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
  ) {
  }

  topicSelected: TopicDto[] = [];

  checkoutForm = this.formBuilder.group({
    title: '',
    description: '',
    imgSrc: '',
    postSrc: '',
    topic: ''
  });
  disableAddTopic = false;
  filteredOptions: Observable<TopicDto[]> | undefined;
  myControl = new FormControl();

  topicDto: TopicDto[] = [];

  newTopic: TopicDto[] = [];

  ngOnInit(): void {
    this.postService.getListTopic().subscribe(ele => {
      this.topicDto = ele;
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(title => title ? this._filter(title) : this.topicDto.slice()),
      );

  }

  private _filter(value: string): TopicDto[] {
    const filterValue = value.toLowerCase();
    // @ts-ignore
    return this.topicDto.filter(topic => topic.title.toLowerCase().includes(filterValue));
  }

  displayFn(topic: TopicDto): string {

    return '';

  }

  onSelectTopic(event: MatAutocompleteSelectedEvent): void {
    const find = this.topicSelected.find(ele => ele.title === event.option.value.title);
    if (!find) {
      this.topicSelected.push(event.option.value);
    }
  }

  addNewTopic(): void {
    if (this.myControl.value !== null && this.myControl.value.replace(/\s/g, '') !== '') {
      const find = this.topicSelected.find(ele => ele.title === this.myControl.value);
      if (!find) {
        this.topicSelected.push({title: this.myControl.value});
        this.myControl.setValue('');
      }
    }
  }

  rmSelectedTopic(data: any): void {
    this.topicSelected =  this.topicSelected.filter(ele => ele.title !== data);
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    const postDto: PostDto = new PostDto();
    postDto.postSrc = this.checkoutForm.value.postSrc === '' ? null : this.checkoutForm.value.postSrc;
    postDto.imgSrc = this.checkoutForm.value.imgSrc === '' ? null : this.checkoutForm.value.imgSrc;
    postDto.description = this.checkoutForm.value.description === '' ? null : this.checkoutForm.value.description;
    postDto.title = this.checkoutForm.value.title === '' ? null : this.checkoutForm.value.title;

    postDto.newTopic = this.topicSelected.filter(ele => !ele.id);
    postDto.listId = [];
    this.topicSelected.forEach(ele => {
      if (ele.id) {
        postDto.listId.push(ele.id);
      }
    });
    const listPostDto: PostDto[] = [];
    listPostDto.push(postDto);
    this.postService.create(listPostDto).subscribe(ele => {
    });
    this.checkoutForm.reset();
    this.topicSelected = [];
  }
}
