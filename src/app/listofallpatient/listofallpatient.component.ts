import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listofallpatient',
  templateUrl: './listofallpatient.component.html',
  styleUrls: ['./listofallpatient.component.css']
})
export class ListofallpatientComponent implements OnInit {

  list :any;
  constructor(public service: DataService) {
    // this.list=[
    //   {'requester_id':1,'fName':'Gaurav','lName':'Girhe','gender':'Male','u_dob':'01/12/1995','blood_group':'O+','requested_qty':55,'require_date':'01/12/2019','request_msg':'urgent','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'requester_id':2,'fName':'Gaurav','lName':'Girhe','gender':'Male','u_dob':'01/12/1995','blood_group':'O+','requested_qty':55,'require_date':'01/12/2019','request_msg':'urgent','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'requester_id':3,'fName':'Gaurav','lName':'Girhe','gender':'Male','u_dob':'01/12/1995','blood_group':'O+','requested_qty':55,'require_date':'01/12/2019','request_msg':'urgent','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'requester_id':4,'fName':'Gaurav','lName':'Girhe','gender':'Male','u_dob':'01/12/1995','blood_group':'O+','requested_qty':55,'require_date':'01/12/2019','request_msg':'urgent','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'requester_id':5,'fName':'Gaurav','lName':'Girhe','gender':'Male','u_dob':'01/12/1995','blood_group':'O+','requested_qty':55,'require_date':'01/12/2019','request_msg':'urgent','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    // ];
    this.getPatientList();
   }

   getPatientList(){

    this.service.getPatientList().subscribe((res)=>{
      console.log(res);
      this.list=res;
      console.log("Aryan"+this.list[0].fName );

    },(error)=>{
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
