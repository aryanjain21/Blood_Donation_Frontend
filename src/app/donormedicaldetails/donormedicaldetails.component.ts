import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
  selector: 'app-donormedicaldetails',
  templateUrl: './donormedicaldetails.component.html',
  styleUrls: ['./donormedicaldetails.component.css']
})
export class DonormedicaldetailsComponent implements OnInit {

  donor_id:any;
  newDonation=
  {
  "donated_amount":'',
  "donor_id":{"u_id":''
          },
  "camp_id":null,
  "hepatitsB":'',
  "hiv":'',
  "malaria":'',
  "hepatitsC":'',
  "email_status":''}
  constructor(private service:DataService,
    private router:Router) { }

  ngOnInit() {
  }

  onAddStock(stockForm)
  {
  this.donor_id=this.newDonation.donor_id.u_id;
   this.service.insertDonation(this.newDonation,this.donor_id);
    console.log("Data Updated");
    toastr.success("Data Added Successfully..")
    this.router.navigate(['/listofdonatedblood'])
    window.location.reload();
  }

}
