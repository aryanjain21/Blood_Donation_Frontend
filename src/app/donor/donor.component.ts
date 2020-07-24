import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { EmitterserviceService } from '../emitterservice.service';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  email:any;
  flag:boolean=false;
  constructor(private dataservice:DataService,private router: Router,private emservice:EmitterserviceService) { 

    this.flag=localStorage['flag'];
    console.log("aaaaaa"+this.flag);

  }
  navBarSwitch(){
    
    if(this.email==undefined)
    {
      this.flag=false;
    }

  }
  isDonor()
  {
    if(sessionStorage['role']=='DONOR')
    {
      return true;
    }
    else
    return false;
  }
 
  ngOnInit() {
    this.email=localStorage['email'];
    console.log('email: ', this.email);
   
    this.emservice.getEmittedValueForNavSwitch()
    .subscribe(item => this.flag=item); 
  }

  onSearch(){
    this.router.navigate(['/home/search']);
  }

  onLogout() {
    if (sessionStorage['login_status'] == '1') {
      const result = confirm('Are you sure you want to logout?');
      if (result) {
        sessionStorage['login_status'] = '0';
      
        localStorage.removeItem('email');
        localStorage.clear();
        //this.emservice.navBarSwitch(false);
        this.router.navigate(['']);
      }
    } else {
      alert('are you kidding me? first login..');
    }
  }

}
