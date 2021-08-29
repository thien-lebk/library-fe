import {Component, OnInit, Input} from '@angular/core';
import {LibCardDto} from '../../../modal/lib-card-dto';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PostService} from '../../../services/library/post.service';
import {LoadingService} from '../../../services/loadingService';
import {AlertService} from '../../../services/alert/alertService';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditLbCardItemWithReviewComponent} from './dialog-edit-lb-card-item-with-review/dialog-edit-lb-card-item-with-review.component';

@Component({
  selector: 'app-lb-card-item-with-review',
  templateUrl: './lb-card-item-with-review.component.html',
  styleUrls: ['./lb-card-item-with-review.component.scss']
})
export class LbCardItemWithReviewComponent implements OnInit {
  @Input() data: LibCardDto = new LibCardDto();
  @Input() postSrc = '';
  @Input() imgSrc = '';
  @Input() title = '';
  @Input() description = '';
  @Input() id = '';
  showDropdown = false;
  closeResult = '';

  constructor(private modalService: NgbModal,
              private $post: PostService,
              private loading$: LoadingService,
              private alert$: AlertService,
              public dialog: MatDialog,
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditLbCardItemWithReviewComponent, {
      data: {
        post: this.data,
      },
      panelClass: 'dialog-class-edit'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deletePost(id: number): void {
    // @ts-ignore
    document.getElementById('closeModal').click();
    this.loading$.startLoadingForm();
    this.$post.deletePost(id).subscribe(ele => {
      this.loading$.stopLoadingForm();
      if (ele.status === 'OK') {
        this.alert$.successRouteChange('Xóa thành công');
        window.location.reload();
      }
    });
  }

  ngOnInit(): void {
  }


}
