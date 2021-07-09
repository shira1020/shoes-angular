

import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { ShoesService } from 'src/app/services/shoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { Shoe } from 'src/app/models/Shoe';
import { SearchByCategoryServiceService } from 'src/app/services/search-by-category-service.service';
import { shoeDetails } from 'src/app/models/shoeDetails';
import { Color } from 'src/app/models/Color';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.scss']
})
export class SearchByCategoryComponent implements OnInit {
  sizes: number[]=[];
  colors: Color[] =[];
  types: string[] = [];
  prices: number[] = [50,100,150,200,250,300,350,400]
  mysize: number ;
  mytype: string ="";
  mycolor: number;
  myprice: number;
  mykind: number;
  sale: number;
  price: number;
  id: number;
  shoe:Shoe ;
  descreption: string="";
  resultsearch: boolean;
  is_found:boolean=true;
  found_shoes: Shoe[] = [];
  // show: boolean;
  picture: Shoe[] = [];
  constructor(private order: OrderFromStockService,private router1: Router,
    private router: ActivatedRoute, private shoes: ShoesService,
     private search: SearchByCategoryServiceService, private auth: AuthService) {}


  ngOnInit(): void {
    

    this.GetSizes();
    // this.sizes = [1,3,6]
    this.GetColors();
    this.GetTypes();
    //this.idshoe = +this.router.snapshot.paramMap.get('idshoe');
    console.log("sizes= ",this.sizes)
    // this.search.color = this.mycolor;
    // this.search.size = this.mysize;
    // this.search.type = this.mytype;
  }


  Search()
  {

  }
  display_shoe(id:number)
  {
console.log("id shoe search", id)
    this.shoes.GetDetailsById(id).subscribe((data: shoeDetails) => {

        this.shoes.current_shoe_details = data;
        
        this.router1.navigate(["/shoe-details/"+id]);
      
    });
    console.log("auth id in search",this.auth.id_branch)
  }
  GetSizes() {

    this.search.GetSizes().subscribe((data: number[]) => { this.sizes = data ; console.log("data= "+data)});
  }
  GetColors() {
    this.search.GetColors().subscribe((data: Color[]) => { this.colors = data ; console.log("colors=", this.colors)});
  }

  GetTypes() {
    this.search.GetTypes().subscribe((data: string[]) => { this.types = data ; console.log("types= ", this.types)});
}

  GetShoesByCategory() {

    // this.shoes.GetPriceAfterSaleByShoe(this.shoe.idshoe).subscribe((data:number)=>{this.sale=data});
    // this.shoes.GetDescreptionSaleByShoe(this.shoe.idshoe).subscribe((data:string)=>{this.descreption=data});
    this.search.GetShoesByCategory(this.mysize, this.mycolor,this.mykind, this.mytype, this.myprice).subscribe((data: Shoe[]) => {
      // this.search.show = this.show;
      // this.search.color = this.mycolor;
      // this.search.size = this.mysize;
      // this.search.type = this.mytype;
       this.found_shoes = data;
       if (this.found_shoes.length!=0 )
       {
         this.is_found=true;
        console.log("idshoe= ", this.found_shoes[0].id_shoe)
       }
        

       console.log(this.found_shoes)
      // if (data.length > 0) {
        this.picture = data;
      // }
      // else
      //   this.resultsearch = true;


    });


  }
  
  // GetPrice() {

  // }
  
  // IsFoundInStock(idshoe:number) {
  //   //this.id=this.picture.map(p=>p.idshoe);
    
  //   this.shoes.IsFoundInStock(idshoe,this.mysize,this.mycolor).subscribe((data: boolean) => {
  //     this.is_found = data;
      
  //     this.search.color = this.mycolor;
  //     this.search.size = this.mysize;
  //     if (this.is_found == true) {
  //       this.router1.navigate(["/found"]);
  //     }
  //     else {
  //       this.router1.navigate(["/not-found-shoe"]);
  //     }
  //   });
  // }

}
