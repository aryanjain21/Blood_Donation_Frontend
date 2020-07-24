import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    "email" : '',
  "password" : ''
  };
  
  
  constructor(
    private dataservice: DataService,
    private router: Router,
    private authService:AuthService) { }


  ngOnInit() {
  }

  Check()
   {
    this.authService.CheckCredentialsWithDB(this.user);

   }

     


  onSignup() {
    this.router.navigate(['/register']);
  }

  onCancel()
  {
    this.router.navigate(['/home'])
  }
}
