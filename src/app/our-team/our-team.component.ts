import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  small:boolean=false;
  noOfColSpan:number=8;
  noOfColSpan4:number=4;
  noOfColSpan7:number=7;
  rowHeight:any="30em";
  Height:any="10em";
  constructor() { }

  ngOnInit(): void {
 
  }
  onResize(event:any) {
    this.noOfColSpan = (event.target.innerWidth <= 768) ? 12 : 8;
    this.noOfColSpan4 = (event.target.innerWidth <= 768) ? 12 : 4;
    this.noOfColSpan7 = (event.target.innerWidth <= 768) ? 12 : 7;
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.rowHeight=(event.target.innerWidth <= 768) ? "30em" :"30em";
    this.Height=(window.innerWidth <= 768) ? "5em" :"10em";
  }

  ngDoCheck() {
    this.noOfColSpan = (window.innerWidth <= 768) ? 12 : 8;
    this.noOfColSpan4 = (window.innerWidth <= 768) ? 12 : 4;
    this.noOfColSpan7 = (window.innerWidth <= 768) ? 12 : 7;
    this.small=(window.innerWidth <= 768) ? true : false;
    this.rowHeight=(window.innerWidth <= 768) ? "30em" :"30em";
    this.Height=(window.innerWidth <= 768) ? "5em" :"10em";
  }
}
