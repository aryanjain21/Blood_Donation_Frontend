import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-donorhistory',
  templateUrl: './donorhistory.component.html',
  styleUrls: ['./donorhistory.component.css']
})
export class DonorhistoryComponent implements OnInit {

  list :any;
  constructor(private service:DataService) {
    // this.list=[
    //   {'donate_id':1,'camp_venu':'pune','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':2,'camp_venu':'pune','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':3,'camp_venu':'pune','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':4,'camp_venu':'pune','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':5,'camp_venu':'pune','donation_date':'04/1/2020', 'donation_amount':55},
    // ];
    this.getDonorHistory();
   }

   getDonorHistory()
   {
    this.service.getDonorHistory().subscribe((res)=>{
      console.log(res);
      this.list=res;
      console.log(this.list);

    },(error)=>{
      console.log(error)
    })
   }

  ngOnInit() {
  }

}
