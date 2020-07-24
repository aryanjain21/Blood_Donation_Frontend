import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as toastr from 'toastr'

@Component({
  selector: 'app-addcamp',
  templateUrl: './addcamp.component.html',
  styleUrls: ['./addcamp.component.css']
})
export class AddcampComponent implements OnInit {

userLogged:any;
user:any;
user_id:any;
camp:any;

  constructor(private service:DataService,
    private router:Router) 
    {
      this.userLogged=JSON.parse(sessionStorage.getItem("user1"));
                console.log(this.userLogged);
                //user_id=this.userLogged.u_id;
                console.log(this.userLogged.userId);
    }

  ngOnInit() {
    this.getSession();
  }

  getSession()
  {
  this.userLogged=JSON.parse(sessionStorage.getItem("user1"));
  console.log(this.userLogged);
  //user_id=this.userLogged.u_id;
  console.log(this.userLogged.userId);

  this.camp={
    "organizer_id":
                {"u_id":this.userLogged.userId},
              
    "blood_amount":'',
    "camp_venue":'',
    "camp_date":''
    }
}

onAddCamp(campForm)
  {
    let loginCredentials = campForm.form.value;
   // alert("Camp Details addedd !");
    console.log(this.camp);
    this.service.addCamp(this.camp);
    toastr.success("Camp Added Successfully")
    this.router.navigate(['/campdetails']);
    window.location.reload();
  }

}
