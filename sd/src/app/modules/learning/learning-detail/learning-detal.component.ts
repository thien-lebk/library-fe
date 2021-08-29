import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
import {BookService} from '../../../services/learning/book.service';
import {BookDto} from '../../../modal/Book';
import {LoadingService} from '../../../services/loadingService';

@Component({
  selector: 'app-learning-detal',
  templateUrl: './learning-detal.component.html',
  styleUrls: ['./learning-detal.component.scss']
})
export class LearningDetalComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();

  constructor(private router: Router, private aRoute: ActivatedRoute, private bookService: BookService,
              private loadingService: LoadingService,
  ) {
  }

  book: BookDto = new BookDto();
  showFiller = false;

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.bookService.getDetail(this.aRoute.snapshot.params.id).subscribe(ele => {
      this.book = ele.data;
      this.accordion.openAll();
      this.loadingService.stopLoading();
    });
  }

  actionClickQuestion(id: number): void {

  }
}
