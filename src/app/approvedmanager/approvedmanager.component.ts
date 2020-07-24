import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-approvedmanager',
  templateUrl: './approvedmanager.component.html',
  styleUrls: ['./approvedmanager.component.css']
})
export class ApprovedmanagerComponent implements OnInit {

  managerlist:any;

  constructor(private dataservice:DataService) 
  {
    this.getAllApprovedManagers();
  }

  ngOnInit() {
  }

  getAllApprovedManagers()
  {
    
    this.dataservice.ListApprovedManager().subscribe((res)=>{
      console.log(res);
      this.managerlist=res;
    },(err)=>{
      console.log(err);
    })
  }

}
