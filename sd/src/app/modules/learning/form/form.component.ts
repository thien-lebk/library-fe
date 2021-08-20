import {Component, OnInit} from '@angular/core';
import {ChapterDto} from '../../../modal/ChapterDto';
import {GridApi} from 'ag-grid-community';
import {AgGridColumn} from 'ag-grid-angular';
import {FormBuilder} from '@angular/forms';
import {BookDto} from '../../../modal/Book';
import {BookService} from '../../../services/learning/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private bookSerivce: BookService
  ) {
  }

  book: BookDto = new BookDto();
  columnDefs = [

    {
      headerName: 'Title', field: 'title', sortable: true, filter: true, editable: true, resizable: true
    },
    {
      headerName: 'Description', field: 'desciption', sortable: true, filter: true, editable: true, resizable: true
    },
    {
      headerName: 'Image', field: 'imgSrc', sortable: true, filter: true, editable: true, resizable: true
    }
  ];
  rowData: ChapterDto[] = [];
  private gridApi: GridApi | undefined;
  private gridColumnApi: AgGridColumn | undefined;
  checkoutForm = this.formBuilder.group({
    title: '',
    description: '',
    imgSrc: '',
    author: '',
    chapterList: []
  });
  returnStatus = '';

  ngOnInit(): void {
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  addChapter(): void {
    const obj: ChapterDto = new ChapterDto();
    obj.title = '';
    obj.description = '';
    obj.imgSrc = '';
    this.rowData.push(obj);
    this.gridApi?.addItems(this.rowData);
    this.gridApi?.refreshCells();
  }

  onSubmit(): void {

    this.book = this.checkoutForm.value;
    this.book.chapterList = this.rowData;
    console.log(this.book);
    this.bookSerivce.create(this.book).subscribe(ele => {
      if (ele.status === 200) {
        this.checkoutForm.reset();
        this.rowData = [];
        this.returnStatus = ele.data;
      }
    });


  }
}
