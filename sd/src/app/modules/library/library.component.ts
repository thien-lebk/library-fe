import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert/alertService';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private alertService: AlertService) {
  }

  ngOnInit(): void {
  }


}
