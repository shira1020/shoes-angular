import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoesService } from 'src/app/services/shoes.service';
import { OrderFromStockService } from 'src/app/services/order-from-stock.service';
import { shoeDetails } from 'src/app/models/shoeDetails';
@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.scss']
})
export class ShoeDetailsComponent implements OnInit {

  shoe: shoeDetails = new shoeDetails();
  id: number;
  src: string;
  name: string = "";
  colors: string[] =[];
  sizes: number[] = [];
  mysize: number;
  mycolor: string;
  is_found: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router1: Router, private shoes: ShoesService,
    private order_from_stock: OrderFromStockService) { }
  isNumeric = (val: number): boolean => {
    return !isNaN(Number(val));
  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.shoe = this.shoes.current_shoe_details;
    console.log(this.shoe)
    // if (!this.isNumeric(this.id))
    //   this.router1.navigate(["/home"]);
    // this.shoes.GetDetailsById(+this.id).subscribe((data: shoeDetails) => {
    //   this.shoe = data;
    //   if (this.shoe == null)
    //     this.router1.navigate(["/home"]);
    // });
    // this.shoes.GetImageById(+this.id).subscribe((data: string) => { this.src= data });
    // this.shoes.GetColorsById(+this.id).subscribe((data:string[])=>{this.colors=data});
    // this.shoes.GetSizesById(+this.id).subscribe((data:number[])=>{this.sizes=data});
  }
  t: boolean = false;
  IsFoundInStock() {
    
    this.shoes.IsFoundInStock(this.id, this.mysize, this.mycolor).subscribe((data: boolean) => {
      this.is_found = data;
      this.order_from_stock.current_id_shoe = this.id;
      this.order_from_stock.current_size = this.mysize;
      this.order_from_stock.current_color = this.mycolor;
      if (this.is_found == true) {

        this.router1.navigate(["/found"]);
      }
      else
        this.router1.navigate(["/not-found-shoe"]);
    });
  }
}
