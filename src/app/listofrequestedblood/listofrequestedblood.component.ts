import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listofrequestedblood',
  templateUrl: './listofrequestedblood.component.html',
  styleUrls: ['./listofrequestedblood.component.css']
})
export class ListofrequestedbloodComponent implements OnInit {

  list :any;

  constructor(public service:DataService) {
    // this.list=[
    //   {'requster_id':1,'fName':'Rajan','gender':'Male','blood_group':'O+','requested_qty':50,'require_date':'04/1/2020', 'request_msg':'urgent'},
    //   {'requster_id':2,'fName':'Rajan','gender':'Male','blood_group':'O+','requested_qty':50,'require_date':'04/1/2020', 'request_msg':'urgent'},
    //   {'requster_id':3,'fName':'Rajan','gender':'Male','blood_group':'O+','requested_qty':50,'require_date':'04/1/2020', 'request_msg':'urgent'},
    //   {'requster_id':4,'fName':'Rajan','gender':'Male','blood_group':'O+','requested_qty':50,'require_date':'04/1/2020', 'request_msg':'urgent'},
    //   {'requster_id':5,'fName':'Rajan','gender':'Male','blood_group':'O+','requested_qty':50,'require_date':'04/1/2020', 'request_msg':'urgent'},
    // ];
    this.getRequestList();
   }

   getRequestList(){

    this.service.getRequestList().subscribe((res)=>{
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
