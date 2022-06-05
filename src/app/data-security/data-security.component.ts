import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-security',
  templateUrl: './data-security.component.html',
  styleUrls: ['./data-security.component.scss']
})
export class DataSecurityComponent implements OnInit {
  small:boolean=false;
  featureCol4:number=5;
  featureCol7:number=12;
  rowHeight:any="34em";
  constructor() { }

  ngOnInit(): void {
  
  }
  onResize(event:any) {
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.featureCol4 = (event.target.innerWidth <= 768) ? 12 : 4;
    this.featureCol7 = (event.target.innerWidth <= 768) ? 12 : 7;
    this.rowHeight=(event.target.innerWidth <= 768) ? "25em" :"30em";
  }

  ngDoCheck() {
    this.small=(window.innerWidth <= 768) ? true : false;
    this.featureCol4 = (window.innerWidth <= 768) ? 12 : 4;
    this.featureCol7 = (window.innerWidth <= 768) ? 12 : 7;
    this.rowHeight=(window.innerWidth <= 768) ? "25em" :"30em";
  }

}
