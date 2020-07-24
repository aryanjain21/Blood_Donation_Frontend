import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listofdonatedblood',
  templateUrl: './listofdonatedblood.component.html',
  styleUrls: ['./listofdonatedblood.component.css']
})
export class ListofdonatedbloodComponent implements OnInit {

  list :any;
  constructor(public service:DataService) {
    // this.list=[
    //   {'donate_id':1,'fName':'Aryan','gender':'Male','blood_group':'O+','donated_amt':50,'donate_date':'04/1/2020', 'camp_date':'21/12/2020','camp_venu':'jodhpur','email_status':'ok'},
    //   {'donate_id':2,'fName':'Aryan','gender':'Male','blood_group':'O+','donated_amt':50,'donate_date':'04/1/2020', 'camp_date':'21/12/2020','camp_venu':'jodhpur','email_status':'ok'},
    //   {'donate_id':3,'fName':'Aryan','gender':'Male','blood_group':'O+','donated_amt':50,'donate_date':'04/1/2020', 'camp_date':'21/12/2020','camp_venu':'jodhpur','email_status':'ok'},
    //   {'donate_id':4,'fName':'Aryan','gender':'Male','blood_group':'O+','donated_amt':50,'donate_date':'04/1/2020', 'camp_date':'21/12/2020','camp_venu':'jodhpur','email_status':'ok'},
    //   {'donate_id':5,'fName':'Aryan','gender':'Male','blood_group':'O+','donated_amt':50,'donate_date':'04/1/2020', 'camp_date':'21/12/2020','camp_venu':'jodhpur','email_status':'ok'},
    // ];
    this.getDonortList();
   }

   getDonortList(){

    this.service.getDonorList().subscribe((res)=>{
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
