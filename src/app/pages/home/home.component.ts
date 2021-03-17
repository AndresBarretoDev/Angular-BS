import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(private api:ApiService) { }

   ngOnInit() {
    //  get data products 
    this.api.getProducts().subscribe(dataProducts=>{
     this.products = dataProducts
     
    })
   
  }

}
