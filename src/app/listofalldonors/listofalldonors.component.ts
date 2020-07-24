import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listofalldonors',
  templateUrl: './listofalldonors.component.html',
  styleUrls: ['./listofalldonors.component.css']
})
export class ListofalldonorsComponent implements OnInit {

  list :any;
  constructor(public service: DataService) {
    // this.list=[
    //   {'u_id':1,'fName':'Aryan','lName':'Jain','gender':'Male','u_dob':'21/12/1997','weight':75,'blood_group':'O+','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'u_id':2,'fName':'Aryan','lName':'Jain','gender':'Male','u_dob':'21/12/1997','weight':75,'blood_group':'O+','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'u_id':3,'fName':'Aryan','lName':'Jain','gender':'Male','u_dob':'21/12/1997','weight':75,'blood_group':'O+','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'u_id':4,'fName':'Aryan','lName':'Jain','gender':'Male','u_dob':'21/12/1997','weight':75,'blood_group':'O+','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    //   {'u_id':5,'fName':'Aryan','lName':'Jain','gender':'Male','u_dob':'21/12/1997','weight':75,'blood_group':'O+','email':'aryanjain@gmail.com','contact':'8385936821', 'city':'Jodhpur','state':'Rajasthan'},
    // ];

    this.getDonorList();
   }

   getDonorList(){
    debugger;
    this.service.getDonorList().subscribe((res)=>{
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
