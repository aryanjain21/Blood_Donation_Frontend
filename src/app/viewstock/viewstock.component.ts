import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstock',
  templateUrl: './viewstock.component.html',
  styleUrls: ['./viewstock.component.css']
})
export class ViewstockComponent implements OnInit {

  stocklist:any;
  constructor(private service:DataService,
    private router:Router) {this.getStocks(); }

  ngOnInit() {
  }

  onSortGroupApos()
  {
    this.service.ListStockByGroupApos().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }

  onSortGroupAneg()
  {
    this.service.ListStockByGroupAneg().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }
  onSortGroupBpos()
  {
    this.service.ListStockByGroupBpos().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }

  onSortGroupBneg()
  {
    this.service.ListStockByGroupBneg().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }
  onSortGroupOpos()
  {
    this.service.ListStockByGroupOpos().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }

  onSortGroupOneg()
  {
    this.service.ListStockByGroupOneg().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }

  onSortGroupABpos()
  {
    this.service.ListStockByGroupABpos().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }

  onSortGroupABneg()
  {
    this.service.ListStockByGroupABneg().subscribe((res)=>{
      console.log(res);
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
  }
  


  getStocks()
  {

    this.service.ListAllStockUnits().subscribe((res)=>{
      console.log("sada"+res)
      console.log(res);
      
      this.stocklist=res;
    },(err)=>{
      console.log(err);
    })
    
  }

}
