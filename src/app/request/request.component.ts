import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  list :any;
  constructor(public service: DataService) {
    // this.list=[
    //   {'req_id':1,'name':'Amar','blood_group':'O+','phone':'9537331338','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':2,'name':'Harshal','blood_group':'O+','phone':'9537331338','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':3,'name':'Chetan','blood_group':'O+','phone':'9537331338','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':4,'name':'Rushabh','blood_group':'O+','phone':'9537331338','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':5,'name':'Bheshaj','blood_group':'O+','phone':'9537331338','require_date':'04/1/2020', 'require_qty':55},
    // ];

    this.getRequest();
   }

   getRequest(){

    this.service.getRequest().subscribe((res)=>{
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
