import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})
export class BranchsComponent implements OnInit {

  constructor(private stockservice:StockService) { }
  branches:string[][]=[];
  t:boolean=false;
  ngOnInit(): void {
    this.stockservice.GetBranchesByShoe().subscribe((data:string[][])=>{this.branches=data});
    if(this.branches[0][0]!=null)
    this.t=true;
  }
}
