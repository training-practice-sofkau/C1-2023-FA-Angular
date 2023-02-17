import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Input() filterBy:string[] = [];
  @Input() title:string = '';
  @Output() toSearch = new EventEmitter<any>();

  searchForm: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder){}


  ngOnInit(): void {
    this.searchForm = this.builder.group(
      {
        paramSearch:'',
        myFilter:this.filterBy[0]
      }
    );
  }

  submitInfo(){
    this.toSearch.emit(this.searchForm.getRawValue())
  }


}
