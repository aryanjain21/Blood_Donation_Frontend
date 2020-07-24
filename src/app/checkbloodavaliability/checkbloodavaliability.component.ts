import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkbloodavaliability',
  templateUrl: './checkbloodavaliability.component.html',
  styleUrls: ['./checkbloodavaliability.component.css']
})
export class CheckbloodavaliabilityComponent implements OnInit {

  list :any;
  constructor(public service:DataService) {
    // this.list=[
    //   {'bloodbag_id':1,'blood_group':'O+','blood_amt':50,'recieve_date':'04/1/2020', 'expire_date':'21/12/2020'},
    //   {'bloodbag_id':2,'blood_group':'O+','blood_amt':50,'recieve_date':'04/1/2020', 'expire_date':'21/12/2020'},
    //   {'bloodbag_id':3,'blood_group':'O+','blood_amt':50,'recieve_date':'04/1/2020', 'expire_date':'21/12/2020'},
    //   {'bloodbag_id':4,'blood_group':'O+','blood_amt':50,'recieve_date':'04/1/2020', 'expire_date':'21/12/2020'},
    //   {'bloodbag_id':5,'blood_group':'O+','blood_amt':50,'recieve_date':'04/1/2020', 'expire_date':'21/12/2020'},
    // ];
    this.CheckBloodAvaliable();
   }

   CheckBloodAvaliable()
   {
    this.service.CheckBloodAvaliable().subscribe((res)=>{
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
