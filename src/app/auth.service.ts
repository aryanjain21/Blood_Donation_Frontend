import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { isNull } from 'util';
import * as toastr from 'toastr'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usr:any;

  constructor(private router: Router,
    private service:DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
      if (this.IsLoggedIn()) {
        return true;
      }
      else {
        this.router.navigate([''])
        return false;
      }
    }

    IsLoggedIn()
    {
      
      if(window.sessionStorage.getItem("login_status")!=null 
          && 
         window.sessionStorage.getItem("login_status")=="1")
      {
        return true;
      }
      else{
        return false;
      }
    }

    CheckCredentialsWithDB(user)
    {
    
    let observableResult= this.service.validateUser(user);
    observableResult.subscribe((result)=>{
      this.usr=result
      console.log("in check user auth service");
      console.log(this.usr);

      if(!isNull(this.usr))
      {   
      
        if(this.usr.u_role=="ADMIN" )
        {
          
         sessionStorage['login_status'] = '1';
         sessionStorage.setItem('user1', JSON.stringify(this.usr));
         sessionStorage.setItem('userId', this.usr.u_id);
         localStorage.setItem('email',this.usr.email);
         localStorage.setItem('flag','true');

         this.router.navigate(['/admin']);
         sessionStorage['role']=this.usr.u_role;
          toastr.success("Login Successfully!");
        }
        else if(this.usr.u_role=="DONOR")
        {
   
            sessionStorage['login_status'] = '1';
            sessionStorage.setItem('user1', JSON.stringify(this.usr));
            sessionStorage.setItem('userId', this.usr.u_id);
            localStorage.setItem('email',this.usr.email);
            localStorage.setItem('flag','true');         
            this.router.navigate(['/donor']);
            sessionStorage['role']=this.usr.u_role;
            toastr.success("Login Successfully!");
        }
        else if(this.usr.u_role=="PATIENT")
        {
   
            sessionStorage['login_status'] = '1';
            sessionStorage.setItem('user1', JSON.stringify(this.usr));
            sessionStorage.setItem('userId', this.usr.u_id);
            localStorage.setItem('email',this.usr.email);
            localStorage.setItem('flag','true');
            sessionStorage['role']=this.usr.u_role;         
            this.router.navigate(['/patient']);
            toastr.success("Login Successfully!");
        }
        else if(this.usr.u_role=="MANAGER")
        {
   
            sessionStorage['login_status'] = '1';
            sessionStorage.setItem('user1', JSON.stringify(this.usr));
            sessionStorage.setItem('status', this.usr.m_status);
            sessionStorage.setItem('userId', this.usr.u_id);
            sessionStorage['m_status']=this.usr.m_status;
            sessionStorage['role']=this.usr.u_role;
            localStorage.setItem('email',this.usr.email);
            localStorage.setItem('m_status', this.usr.m_status);
            localStorage.setItem('flag','true');         
            this.router.navigate(['/manager']);
            toastr.success("Login Successfully!");
        }
        else
        {
          toastr.error("Invalid Login!Please Enter Correct Credential..");
           this.router.navigate(['']);
          //  this.toastr.error(' Invalid Login');
        }
       }
     
      
    })
  }

}
