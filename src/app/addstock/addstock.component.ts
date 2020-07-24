import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {

  userLogged:any;
  user:any;
  user_id:any;
  stock:any;

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

  this.stock={
    "m_id":
                {"u_id":this.userLogged.userId},
              
    "blood_amt":'',
    "blood_group":'',
    "expire_date":'',
    "recieve_date":''
    }
  }

  onAddStock(stockForm)
  {
    let loginCredentials = stockForm.form.value;
    alert("Stock Details addedd !");
    console.log(this.stock);
    this.service.addStock(this.stock);
    toastr.success("Stock Added Successfully!")
    this.router.navigate(['/viewstock']);
      
  }

}
