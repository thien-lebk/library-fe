import {AfterContentChecked, AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {PostService} from '../../../../services/library/post.service';
import {AlertService} from '../../../../services/alert/alertService';
import {LoadingService} from '../../../../services/loadingService';
import {TopicDto} from '../../../../modal/TopicDto';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PostDto} from '../../../../modal/PostDto';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TopicService} from '../../../../services/library/topicService';

@Component({
  selector: 'app-dialog-edit-lb-card-item-with-review',
  templateUrl: './dialog-edit-lb-card-item-with-review.component.html',
  styleUrls: ['./dialog-edit-lb-card-item-with-review.component.scss']
})
export class DialogEditLbCardItemWithReviewComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private alertService: AlertService,
              private loadingService: LoadingService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private topic$: TopicService,
  ) {
  }


  topicSelected: TopicDto[] = [];

  checkoutForm = this.formBuilder.group({
    title: '',
    description: '',
    imgSrc: '',
    postSrc: '',
    topic: '',
    id: '',
  });
  disableAddTopic = false;
  filteredOptions: Observable<TopicDto[]> | undefined;
  myControl = new FormControl();

  topicDto: TopicDto[] = [];

  newTopic: TopicDto[] = [];

  ngOnInit(): void {
    this.postService.getListTopic().subscribe(ele => {
      this.topicDto = ele;
      this.checkoutForm.patchValue(this.data.post);
    });
    this.topic$.getListTopicByIdPost(this.data.post.id).subscribe(list => {
      this.topicSelected = list.data;
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
    this.topicSelected = this.topicSelected.filter(ele => ele.title !== data);
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    const postDto: PostDto = new PostDto();
    postDto.postSrc = this.checkoutForm.value.postSrc === '' ? null : this.checkoutForm.value.postSrc;
    postDto.imgSrc = this.checkoutForm.value.imgSrc === '' ? null : this.checkoutForm.value.imgSrc;
    postDto.description = this.checkoutForm.value.description === '' ? null : this.checkoutForm.value.description;
    postDto.title = this.checkoutForm.value.title === '' ? null : this.checkoutForm.value.title;
    postDto.id = this.checkoutForm.value.id;
    postDto.newTopic = this.topicSelected.filter(ele => !ele.id);
    postDto.listId = [];
    this.topicSelected.forEach(ele => {
      if (ele.id) {
        postDto.listId.push(ele.id);
      }
    });
    const listPostDto: PostDto[] = [];
    listPostDto.push(postDto);
    this.postService.update(listPostDto).subscribe(ele => {
      this.alertService.success('Cập nhật thành công');
      this.checkoutForm.reset();
      this.topicSelected = [];
      window.location.reload();
    });

  }

}
