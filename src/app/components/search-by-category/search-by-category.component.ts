

import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ShoesService } from 'src/app/services/shoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { Shoe } from 'src/app/models/Shoe';
import { SearchByCategoryServiceService } from 'src/app/services/search-by-category-service.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss']
})
export class SearchByCategoryComponent implements OnInit {
  sizes: number[] = [];
  colors: string[] = [];
  types: string[] = [];
  mysize: number;
  mytype: string;
  mycolor: string;
  sale: number;
  price: number;
  id: number;
  shoe:Shoe;
  descreption: string="";
  resultsearch: boolean;
  is_found:boolean=false;
  // show: boolean;
  picture: Shoe[] = [];
  constructor(private order: OrderFromStockService,private router1: Router,private router: ActivatedRoute, private shoes: ShoesService, public search: SearchByCategoryServiceService) { }


  GetSizes() {

    this.search.GetSizes().subscribe((data: number[]) => { this.sizes = data });
  }
  GetColors() {
    this.search.GetColors().subscribe((data: string[]) => { this.colors = data });
  }
  GetTypes() {
    this.search.GetTypes().subscribe((data: string[]) => { this.types = data });
  }

  ngOnInit(): void {
    this.GetSizes();
    this.GetColors();
    this.GetTypes();
    //this.idshoe = +this.router.snapshot.paramMap.get('idshoe');
    
    this.search.color = this.mycolor;
    this.search.size = this.mysize;
    this.search.type = this.mytype;
  }
  GetShoesByCategory() {
    // this.shoes.GetPriceAfterSaleByShoe(this.shoe.idshoe).subscribe((data:number)=>{this.sale=data});
    // this.shoes.GetDescreptionSaleByShoe(this.shoe.idshoe).subscribe((data:string)=>{this.descreption=data});
    this.search.GetShoesByCategory(this.mysize, this.mycolor, this.mytype).subscribe((data: Shoe[]) => {
      // this.search.show = this.show;
      // this.search.color = this.mycolor;
      // this.search.size = this.mysize;
      // this.search.type = this.mytype;

      // if (data.length > 0) {
        this.picture = data;
      // }
      // else
      //   this.resultsearch = true;


    });


  }
  
  // GetPrice() {

  // }
  
  IsFoundInStock(idshoe:number) {
    //this.id=this.picture.map(p=>p.idshoe);
    
    this.shoes.IsFoundInStock(idshoe,this.mysize,this.mycolor).subscribe((data: boolean) => {
      this.is_found = data;
      
      this.search.color = this.mycolor;
      this.search.size = this.mysize;
      if (this.is_found == true) {
        this.router1.navigate(["/found"]);
      }
      else {
        this.router1.navigate(["/not-found-shoe"]);
      }
    });
  }

}
