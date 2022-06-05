import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit {
  small:boolean=false;
  featureCols:number=5;
  featureCol7:number=12;
  constructor() { }

  ngOnInit(): void {
  
  }
  onResize(event:any) {
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.featureCols = (event.target.innerWidth <= 768) ? 12 : 5;
    this.featureCol7 = (event.target.innerWidth <= 768) ? 12 : 7;
  }

  ngDoCheck() {
    this.small=(window.innerWidth <= 768) ? true : false;
    this.featureCols = (window.innerWidth <= 768) ? 12 : 5;
    this.featureCol7 = (window.innerWidth <= 768) ? 12 : 7;
  }
}
