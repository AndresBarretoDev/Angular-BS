import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resume-cart',
  templateUrl: './resume-cart.component.html',
  styles: [
  ]
})
export class ResumeCartComponent implements OnInit {
@Input() products:any;
resumePrice:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
    this.resumePrice = this.products.map((item:any) => parseInt(item.price)).reduce((a:any,b:any)=>a+b)
    console.log(this.resumePrice);
    
    
  }

}
