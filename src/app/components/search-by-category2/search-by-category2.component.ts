import { Component, OnInit } from '@angular/core';
import { SearchByCategoryServiceService } from 'src/app/services/search-by-category-service.service';

@Component({
  selector: 'app-search-by-category2',
  templateUrl: './search-by-category2.component.html',
  styleUrls: ['./search-by-category2.component.scss']
})
export class SearchByCategory2Component implements OnInit {
  sizes: number[]=[];
  colors: string[] = [];
  mysize: number=0 ;
  mytype: string ="";
  mycolor: string="";

  constructor( private search: SearchByCategoryServiceService) { }

  ngOnInit(): void {
     this.search.GetSizes().subscribe((data: number[]) => { this.sizes = data ; console.log("data= "+data)});
     this.search.GetColors().subscribe((data: string[]) => { this.colors = data });
  }

}
