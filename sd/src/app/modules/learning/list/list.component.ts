import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../services/learning/book.service';
import {BookDto} from '../../../modal/Book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  listBook: BookDto[] = [];

  ngOnInit(): void {
    this.bookService.getList().subscribe(ele => {
    this.listBook = ele;
    });
  }

}
