import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-campdetails',
  templateUrl: './campdetails.component.html',
  styleUrls: ['./campdetails.component.css']
})
export class CampdetailsComponent implements OnInit {

  list :any;
  constructor(public service: DataService) {
    // this.list=[
    //   {'camp_id':1,'camp_venu':'pune','camp_date':'21/12/2020'},
    //   {'camp_id':2,'camp_venu':'pune','camp_date':'21/12/2020'},
    //   {'camp_id':3,'camp_venu':'pune','camp_date':'21/12/2020'},
    //   {'camp_id':4,'camp_venu':'pune','camp_date':'21/12/2020'},
    //   {'camp_id':5,'camp_venu':'pune','camp_date':'21/12/2020'},
    // ];

    this.getData();
   }

   getData(){

    this.service.getData().subscribe((res:any)=>{
      console.log(res);
      this.list=res;
      console.log("df"+this.list[0].camp_venu);

    },(error)=>{
      console.log(error)
    })
  }
  ngOnInit() {
  }

}
