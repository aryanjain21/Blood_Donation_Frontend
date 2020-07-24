import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})


export class ChangepasswordComponent implements OnInit {
  user: any;
  constructor(private service: DataService,
    private router :Router) { }
  ngOnInit() {
    console.log("in init")
    const uobj=sessionStorage.getItem('userId')
    console.log(uobj)
    let observableResult = this.service.getSingleUserDetails(uobj)
    observableResult.subscribe((result:any)=>{
      console.log(result);
      this.user=result
    })
  }

  UpdatePassword(myForm)
  {
    console.log(myForm)
    let observableResult = this.service.changeMyPassword(myForm.form.value.newpassword,myForm.form.value)
    observableResult.subscribe((result:any)=>{
      console.log(result);
      //alert("Password Changed!");
      toastr.success("Succesfully Password Changed");
      window.sessionStorage.setItem("role","");
      window.sessionStorage.setItem("login_status", "0");
      window.sessionStorage.setItem("userId",null);
      this.router.navigate(['/login'])
    });
  }

}
