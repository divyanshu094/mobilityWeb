import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs:any=[];
  small:boolean=false;
  noOfCol:number=2;
  rowHeight:any="30em";
  noOfColBlog:number=2;
  rowHeightBlog:any="40em";
  constructor() { }

  ngOnInit(): void {
    this.blogs=[
      {
        "src":"../../assets/imgs/pexels-rodnae-productions-6065089.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src":"../../assets/imgs/pexels-picography-4458.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src":"../../assets/imgs/pexels-jess-bailey-designs-965117.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src":"../../assets/imgs/pexels-rodnae-productions-6065089.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src":"../../assets/imgs/pexels-rodnae-productions-6065089.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }, {
        "src":"../../assets/imgs/pexels-rodnae-productions-6065089.png",
        "heading":"Mobility Insights_Sale of PwC’s Global Mobility Practice",
        "subText":"We work side-by-side with our partners at every stage of growth to venture.",
      }
    ];
 
  }
  onResize(event:any) {
    this.small=(event.target.innerWidth <= 768) ? true : false;
    this.noOfCol = (event.target.innerWidth <= 768) ? 1 : 2;
    this.rowHeight=(event.target.innerWidth <= 768) ? "20em" :"30em";
    this.noOfColBlog = (event.target.innerWidth <= 768) ? 1 : 3;
    this.rowHeightBlog=(event.target.innerWidth <= 768) ? "30em" :"40em";
    
  }

  ngDoCheck() {
    this.small=(window.innerWidth <= 768) ? true : false;
    this.noOfCol = (window.innerWidth <= 768) ? 1 : 2;
    this.rowHeight=(window.innerWidth <= 768) ? "20em" :"30em";
    this.noOfColBlog = (window.innerWidth <= 768) ? 1 : 3;
    this.rowHeightBlog=(window.innerWidth <= 768) ? "30em" :"40em";
  }

  getTabIndex(ev:any){
    console.log(ev);
    
  }

}
