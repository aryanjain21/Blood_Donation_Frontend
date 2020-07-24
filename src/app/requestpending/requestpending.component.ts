import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as toastr from 'toastr'

@Component({
  selector: 'app-requestpending',
  templateUrl: './requestpending.component.html',
  styleUrls: ['./requestpending.component.css']
})
export class RequestpendingComponent implements OnInit {

  request_list:any;

  constructor(private service:DataService) { 
    
  }

  ngOnInit() {
    this.getAllPendingRequests();
  }


  getAllPendingRequests()
  {
    this.service.ListAllPendingRequest().subscribe((res)=>{
      console.log(res);
      this.request_list=res;
    },(error)=>{
      console.log(error);
    })
  }


  onApprove(id)
  {
    console.log("m_is"+id);
    this.service.approveRequest(id).subscribe((res)=>{
  
      console.log(res);
    },(err)=>{
      toastr.error("Somthing Wrong..")
      console.log(err);
    })
    toastr.success("Request Approved successfully!!!");
    window.location.reload();
  }
}
