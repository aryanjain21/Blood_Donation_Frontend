import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patientreport',
  templateUrl: './patientreport.component.html',
  styleUrls: ['./patientreport.component.css']
})
export class PatientreportComponent implements OnInit {

  list :any;
  constructor(public service:DataService) {
    // this.list=[
    //   {'requster_id':1,'fName':'Rushabh','gender':'Male','blood_group':'O+','request_msg':'urgent','require_date':'21/12/2020','requested_qty':55},
    //   {'requster_id':2,'fName':'Rushabh','gender':'Male','blood_group':'O+','request_msg':'urgent','require_date':'21/12/2020','requested_qty':55},
    //   {'requster_id':3,'fName':'Rushabh','gender':'Male','blood_group':'O+','request_msg':'urgent','require_date':'21/12/2020','requested_qty':55},
    //   {'requster_id':4,'fName':'Rushabh','gender':'Male','blood_group':'O+','request_msg':'urgent','require_date':'21/12/2020','requested_qty':55},
    //   {'requster_id':5,'fName':'Rushabh','gender':'Male','blood_group':'O+','request_msg':'urgent','require_date':'21/12/2020','requested_qty':55},
    // ];
    this.getPatientReport();
   }

   getPatientReport()
   {
    this.service.getPatietReport().subscribe((res)=>{
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
