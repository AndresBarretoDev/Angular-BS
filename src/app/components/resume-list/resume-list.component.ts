import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resume-list',
  templateUrl: './resume-list.component.html',
  styles: [
  ]
})
export class ResumeListComponent implements OnInit {
  @Input() listItems:any
  constructor() { }

  ngOnInit(): void {
    
  }

}
