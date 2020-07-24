import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-donorreport',
  templateUrl: './donorreport.component.html',
  styleUrls: ['./donorreport.component.css']
})
export class DonorreportComponent implements OnInit {

  list :any;
  constructor(public service:DataService) {
    // this.list=[
    //   {'donate_id':1,'fName':'Niranjan','gender':'Male','blood_group':'O+','camp_venu':'pune','camp_date':'21/12/2020','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':2,'fName':'Niranjan','gender':'Male','blood_group':'O+','camp_venu':'pune','camp_date':'21/12/2020','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':3,'fName':'Niranjan','gender':'Male','blood_group':'O+','camp_venu':'pune','camp_date':'21/12/2020','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':4,'fName':'Niranjan','gender':'Male','blood_group':'O+','camp_venu':'pune','camp_date':'21/12/2020','donation_date':'04/1/2020', 'donation_amount':55},
    //   {'donate_id':5,'fName':'Niranjan','gender':'Male','blood_group':'O+','camp_venu':'pune','camp_date':'21/12/2020','donation_date':'04/1/2020', 'donation_amount':55},
    // ];
    this.getDonorReport();
   }

   getDonorReport(){
    debugger;
    this.service.getDonorReport().subscribe((res)=>{
      console.log(res);
      this.list=res;
      console.log("ntnhgnt"+this.list.city);
      console.log(this.list.email);

    },(error)=>{
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
