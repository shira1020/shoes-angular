import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockService } from 'src/app/services/stock.service';
import { Shoe } from 'src/app/models/Shoe';

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.scss']
})
export class AddShoeComponent implements OnInit {
  constructor(private http:HttpClient,private stock:StockService) { }
  selectedFile: File
shoe:Shoe=new Shoe();

  // onFileChanged(event) {
  //   this.selectedFile = event.target.File[5]
  //   console.log(File);
  // }

upload:string="";
isupload:boolean=false;
OnUpload() {
  const fd=new FormData();
// my-backend.com/file-upload
  
     this.stock.OnUpload(this.shoe).subscribe((data:boolean) => {this.isupload=data
      if(this.isupload==true)
this.upload="The shoe has been successfully updated"
        console.log(this.isupload); // handle event here
      });  }
  ngOnInit(): void {
  }

}
