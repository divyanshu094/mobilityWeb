import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  cols:number=3;
  blogContent = "";
  constructor() { }

  ngOnInit(): void {
    this.blogs = [
      {
        "src": "../../assets/imgs/pexels-rodnae-productions-6065089.png",
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
   
    this.blogContent = "CD&R Acquisition of PwC’s Global Mobility Tax and Immigration Services – A Few Initial Thoughts. On 19th October 2021, Clayton, Dubilier & Rice (“CDR”) and PwC announced an agreement under which CD&R funds will acquire PwC’s Global Mobility Tax and Immigration Services business. This has shaken the normally peaceful world of Global Mobility. The authors, through this short article, try to give their preliminary thoughts on this deal and how it will impact the Global Mobility space. Amitabh Singh & Steve Rao, 20 Oct 2021 Initial reaction to the news The news of PwC looking to sell its Global Mobility practice actually broke in July of this year. That had indeed taken us by surprise though PwC had refused to confirm or deny the news. What has most surprised us now is how fast a buyer was found and the deal concluded, more so in the current pandemic scenario when business travel and face-to-face meetings are restricted. It has been hardly 3 months! Two days back I read an article about Wipro’s stellar performance over the last one year under their new CEO who has run the company remotely from Paris for the past 15 months. This may not be the best occasion to talk about it but one must pause for a moment and ponder – if billion dollar deals can be made and billion dollar companies can be run effectively by people largely working in their home locations and keeping travel to the minimum, how does that augur for the whole Global Mobility industry in general? What happens next? After the awe and euphoria of the announcement has abated, the real work of separating the business will commence. Carving out a running business unit from one organisation to another is a very complex exercise. Especially when the business unit is to become a new born entity in itself. The transition of people, knowledge base, technology and, most importantly, clients will need to be done with minimal disruption and these need to happen at the country level, keeping in mind the local laws, taxation and all other aspects. How are the other Big4 firms going to react to this deal? What we gather from informal sources is that the other firms are presently on a “wait and watch” mode. It all depends on how the people and clients of PwC react to this deal. The Global Mobility practice has traditionally sat within the tax practice of all accounting firms but has included elements of not just core personal income tax but immigration, social security, employment laws, compensation & benefits and HR consulting. Accounting firms have always struggled in performing the entire suite of services that form the whole gamut of Global Mobility. They have traditionally declined any service that could be considered as “management functions” or “handling cash” and clients have had to look at other service providers to fill those gaps. In case of audit clients, it has been even more difficult to provide Global Mobility services. Coupled with that is the current Covid induced scenario where global business travel, a key driver of Global Mobility, is seriously impacted and recovery appears to be a long drawn out process. How much of travel will eventually comeback is still a matter of conjecture. Considering all that, the Global Mobility practice appears to be the “best candidate” amongst all other areas of Tax to be unbundled. I will not be surprised if one or more of the other Big4 firms decide to follow suit, albeit after watching how the current deal plays out at the ground level."
  }
  onResize(event:any) {
    this.cols = (event.target.innerWidth <= 768) ? 1 : 3;
    // this.rowHeight= (window.innerWidth<=768) ? "60em" : "40em";
   
    
  }

  ngDoCheck() {
    this.cols = (window.innerWidth <= 768) ? 1 : 3;
  }

  getTabIndex(ev:any){
    console.log(ev);
    
  }
}
