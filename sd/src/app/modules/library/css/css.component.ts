import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/library/post.service';
import {LibCardDto} from '../../../modal/lib-card-dto';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  data: LibCardDto[] = [];

  constructor(private cssService: PostService) {
  }

  ngOnInit(): void {
    function makeObject(data: any): any {
      const key = data[0];
      const returnData: any = [];
      for (let i = 1; i < data.length; i++) {
        const value: LibCardDto = new LibCardDto(data[i]);
        returnData.push(value);
      }
      return returnData;
    }
    this.cssService.getList().subscribe(ele => {
      this.data =  ele;
    });
  }
}
