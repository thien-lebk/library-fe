import { Component, OnInit, Input } from '@angular/core';
import {LibCardDto} from '../../../modal/lib-card-dto';

@Component({
  selector: 'app-lb-card-item-with-review',
  templateUrl: './lb-card-item-with-review.component.html',
  styleUrls: ['./lb-card-item-with-review.component.scss']
})
export class LbCardItemWithReviewComponent implements OnInit {
@Input() data: LibCardDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
