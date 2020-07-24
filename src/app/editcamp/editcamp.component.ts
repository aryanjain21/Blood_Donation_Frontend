import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editcamp',
  templateUrl: './editcamp.component.html',
  styleUrls: ['./editcamp.component.css']
})
export class EditcampComponent implements OnInit {
  list={
    "organizer_id": {
    "u_id": '',
    "fName": "abc",
    "contact": "",
    "addr": {
        "city": "",
        "state": "",
        "country": "",
        "pincode": ""
      },
    },
    "camp_venue": "",
    "camp_date": ""
  }

  constructor(private route: ActivatedRoute, 
    private service: DataService,
    private router: Router) { }
   
    ngOnInit() {
      console.log("in init")
      const uobj=sessionStorage.getItem('userId')
      console.log(uobj)
      let observableResult = this.service.getSingleUserDetails(uobj)
      observableResult.subscribe((result:any)=>{
        console.log(result);
        this.list=result
      })
    }

  onEdit(MAHARANSA)
  {
    let observableResult = this.service.updateCamp(sessionStorage.getItem('userId'),this.list)
    observableResult.subscribe((result:any)=>{
      console.log(result);
      alert("Edit Successfully!");
          this.router.navigate(['/campdetails'])     
    });
  }

  // CancelUpdate()
  // {
  //   this.router.navigate(['/manager']);
  // }

  onCancel()
  {
    this.router.navigate(['/manager']);
  }

}
