import { Component } from '@angular/core';
import { Router } from '@angular/router'
import * as toastr from 'toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';

  constructor(private router:Router)
  { }

  isAdmin()
  {
    if(sessionStorage['role']=="ADMIN")
    return true;
    else
    return false;
  }

  isManager()
  {
    if(sessionStorage['role']=="MANAGER" && sessionStorage['m_status']=="false" )
    return true;
    else
    return false;
  }

  isManagerApproved()
  {
    if(sessionStorage['role']=="MANAGER" && sessionStorage['m_status']=='true')
    return true;
    else
    return false;

  }

  isDonor()
  {
    if(sessionStorage['role']=="DONOR")
    return true;
    else
    return false;
  }

  isPatient()
  {
    if(sessionStorage['role']=="PATIENT")
    return true;
    else
    return false;
  }

  onLogout()
  {
    window.sessionStorage.setItem("role","");
    window.sessionStorage.setItem("login_status", "0");
    window.sessionStorage.setItem("userId",null);
    toastr.success("Log Out Successfully");
    this.router.navigate(['/home']);
  }
  
  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("login_status")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
    else{
      return false;
    }
  }
}
