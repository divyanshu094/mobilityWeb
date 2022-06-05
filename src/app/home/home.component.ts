import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs:any=[];
  noOfCol:number=2;
  rowHeight:any="34em";
  rowHeightSeamless:any="50em";
  rowHeightBlog :any ="32em";
  small:boolean=false;
  blogCols:number=3;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.blogs = [
      {
        "src": "../../assets/imgs/pexels-picography-4458.png",
        "heading": "Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText": "We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src": "../../assets/imgs/pexels-picography-4458.png",
        "heading": "Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText": "We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src": "../../assets/imgs/pexels-jess-bailey-designs-965117.png",
        "heading": "Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText": "We work side-by-side with our partners at every stage of growth to venture.",
      }
    ];
    
    
  }

  ngDoCheck() {
    this.noOfCol = (window.innerWidth <= 768) ? 1 : 2;
    this.small=(window.innerWidth <= 768) ? true : false;
    this.blogCols=(window.innerWidth <= 768) ? 1 : 3;
    this.rowHeight=(window.innerWidth <= 768) ? "24em" :"34em";
    this.rowHeightSeamless=(window.innerWidth <= 768) ? "30em" :"55em";
    this.rowHeightBlog=(window.innerWidth <= 768) ? "30em" :"32em";
  }

  onResize(event:any) {
    this.noOfCol = (event.target.innerWidth <= 768) ? 1 : 2;
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.blogCols=(event.target.innerWidth <= 768) ? 1 : 3;
    this.rowHeight=(event.target.innerWidth <= 768) ? "24em" :"34em";
    this.rowHeightSeamless=(event.target.innerWidth <= 768) ? "30em" :"55em";
    this.rowHeightBlog=(event.target.innerWidth <= 768) ? "30em" :"32em";
    console.log(this.noOfCol);
    
  }

}
