import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientapprove',
  templateUrl: './patientapprove.component.html',
  styleUrls: ['./patientapprove.component.css']
})
export class PatientapproveComponent implements OnInit {

  list:any;

  constructor(private service:DataService,
    private router:Router) { }

  ngOnInit() {
   
  }

  getPatientStatus()
  {
    console.log("in getPatientStatus()")
    const uobj=sessionStorage.getItem('userId')
    console.log(uobj)
    let observableResult = this.service.getSinglePatientDetails(uobj)
    observableResult.subscribe((result:any)=>{
      console.log(result);
      this.list=result
    })
  }

}
