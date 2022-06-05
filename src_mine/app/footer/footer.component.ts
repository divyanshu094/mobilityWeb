import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  noOfCol:number=12;
  colspan4:number=4;
  colspan2:number=2;
  colspan3:number=3;
  small:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.noOfCol = (window.innerWidth <= 768) ? 2 : 12;
    this.colspan4 = (window.innerWidth <= 768) ? 2 : 4;
    this.colspan2 = (window.innerWidth <= 768) ? 1 : 2;
    this.colspan3 = (window.innerWidth <= 768) ? 1 : 3;
    this.small=(window.innerWidth <= 768) ? true : false;
  }

  ngDoCheck() {
    this.noOfCol = (window.innerWidth <= 768) ? 2 : 12;
    this.colspan4 = (window.innerWidth <= 768) ? 2 : 4;
    this.colspan2 = (window.innerWidth <= 768) ? 1 : 2;
    this.colspan3 = (window.innerWidth <= 768) ? 1 : 3;
    this.small=(window.innerWidth <= 768) ? true : false;
  }

  onResize(event:any) {
    this.noOfCol = (event.target.innerWidth <= 768) ? 2 : 4;
    this.colspan4 = (event.target.innerWidth <= 768) ? 2 : 4;
    this.colspan2 = (event.target.innerWidth <= 768) ? 1 : 2;
    this.colspan3 = (event.target.innerWidth <= 768) ? 1 : 3;
    this.small=(event.target.innerWidth <= 768) ? true : false;
    
  }

}
