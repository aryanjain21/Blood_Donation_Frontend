import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvemanager',
  templateUrl: './approvemanager.component.html',
  styleUrls: ['./approvemanager.component.css']
})
export class ApprovemanagerComponent implements OnInit {

//managerList:any;
id:any;
manager_list:any;
  constructor(private dataservice:DataService,
    private router:Router) { }

  ngOnInit() {
    this.getAllPendingManagers();
  }

  getAllPendingManagers()
  {
  this.dataservice.ListPendingManager().subscribe((res)=>{
    console.log(res);
    this.manager_list=res;
  },(err)=>{
    console.log(err);
  })
}

onApprove(id)
{
      //debugger;

    console.log("m_is"+id);
    this.dataservice.approveManager(id).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      toastr.error("Something Wrong..")
      console.log(err);
    })
    toastr.success("Manager Approved successfully!!!")
    this.router.navigate(['/approvedmanager']);
    window.location.reload();
   
}


}
