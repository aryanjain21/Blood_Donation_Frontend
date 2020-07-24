import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-requestapproved',
  templateUrl: './requestapproved.component.html',
  styleUrls: ['./requestapproved.component.css']
})
export class RequestapprovedComponent implements OnInit {

  
  approved:any;

  constructor(private service:DataService)
   {this.getAllApprovedRequests(); }

  ngOnInit() {
  }

  getAllApprovedRequests()
  {
    this.service.ListAllApprovedRequest().subscribe((res)=>{
      console.log(res);
      this.approved=res;
    },(error)=>{
      console.log(error);
    })
  }

}
