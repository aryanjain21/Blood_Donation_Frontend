import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-managerstatuslist',
  templateUrl: './managerstatuslist.component.html',
  styleUrls: ['./managerstatuslist.component.css']
})
export class ManagerstatuslistComponent implements OnInit {

  managerlist:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.getAllManagerStatus();
  }

  getAllManagerStatus()
  {
  this.dataservice.ListManagerStatus().subscribe((res)=>{
    console.log(res);
    this.managerlist=res;
  },(err)=>{
    console.log(err);
  })
}

}
