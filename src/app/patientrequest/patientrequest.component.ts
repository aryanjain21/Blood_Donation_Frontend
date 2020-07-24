import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patientrequest',
  templateUrl: './patientrequest.component.html',
  styleUrls: ['./patientrequest.component.css']
})
export class PatientrequestComponent implements OnInit {

  list :any;
  constructor(public service:DataService) {
    // this.list=[
    //   {'req_id':1,'blood_group':'O+','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':2,'blood_group':'O+','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':3,'blood_group':'O+','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':4,'blood_group':'O+','require_date':'04/1/2020', 'require_qty':55},
    //   {'req_id':5,'blood_group':'O+','require_date':'04/1/2020', 'require_qty':55},
    // ];
    this.getPatientHistory();
   }

   getPatientHistory()
   {
    this.service.getPatietHistory().subscribe((res)=>{
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
