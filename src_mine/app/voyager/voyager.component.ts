import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voyager',
  templateUrl: './voyager.component.html',
  styleUrls: ['./voyager.component.scss']
})
export class VoyagerComponent implements OnInit {
  aboutCols:number=12;
  phnCols:number=12;
  rowHeight:any="50em";
  featuresHeight:any="40em";
  small:boolean=false;
  constructor() { }

  ngOnInit(): void {
 
  }
  onResize(event:any) {
    this.aboutCols = (event.target.innerWidth <= 768) ? 12 : 6;
    this.phnCols = (event.target.innerWidth <= 768) ? 12 : 4;
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.rowHeight= (window.innerWidth<=768) ? "60em" : "40em";
    this.featuresHeight= (window.innerWidth<=768) ? "105em" : "45em";
    
  }

  ngDoCheck() {
    this.aboutCols = (window.innerWidth <= 768) ? 12 : 6;
    this.phnCols = (window.innerWidth <= 768) ? 12 : 4;
    this.small=(window.innerWidth <= 768) ? true : false;
    this.rowHeight= (window.innerWidth<=768) ? "60em" : "40em";
    this.featuresHeight= (window.innerWidth<=768) ? "105em" : "45em";
  }
}
