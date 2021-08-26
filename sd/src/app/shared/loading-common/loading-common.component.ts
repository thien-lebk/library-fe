import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../../services/alert/loadingService';

@Component({
  selector: 'app-loading-common',
  templateUrl: './loading-common.component.html',
  styleUrls: ['./loading-common.component.scss']
})
export class LoadingCommonComponent implements OnInit {
  loadingSub: Subscription | undefined;

  constructor(
    private loadingService: LoadingService
  ) {
  }

  @Input() loading = false;

  ngOnInit(): void {
    this.loadingSub = this.loadingService.loadingObject
      .subscribe(data => {
        this.loading = data;
      });
  }

}
