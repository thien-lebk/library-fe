import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/learning/book.service';
import {BookDto} from '../../../modal/Book';
import {LoadingService} from '../../../services/loadingService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private bookService: BookService,
              private loadingService: LoadingService,
  ) {
  }

  listBook: BookDto[] = [];

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.bookService.getList().subscribe(ele => {
      this.listBook = ele.data;
      this.loadingService.stopLoading();
    });
  }

}
