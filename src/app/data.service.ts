import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  message:any;
  validuser="http://15.206.123.53:7070/test_boot/user/validate";
  updateuser="http://15.206.123.53:7070/test_boot/user";
  changepassword="http://15.206.123.53:7070/test_boot/user/updatepassword/";
  donor="http://15.206.123.53:7070/test_boot/donation/donate";
  camplist="http://15.206.123.53:8080/Me_Blood_Donation2/camps/camp/";
  stocklist="http://15.206.123.53:7070/test_boot/stock";
  baseUrl = "http://15.206.123.53:7070/test_boot/camps/camplist";
  reqUrl="http://15.206.123.53:7070/test_boot/requester/date";
  requrl="http://15.206.123.53:7070/test_boot/requester/date";
  myprofile="http://15.206.123.53:7070/test_boot/user/";
  manager="http://15.206.123.53:7070/test_boot/user/manager/";
  requester="http://15.206.123.53:7070/test_boot/requester/";
  managerstatus="http://15.206.123.53:7070/test_boot/user/manager/list";

  constructor(private router: Router,public http:HttpClient) { }

  validateUser(user)
  { return this.http.post(this.validuser,user);}

  updateUser(id,user)
  { return this.http.put(this.updateuser+"/"+id,user)}

  updateCamp(id,user)
  { return this.http.put(this.camplist+"/"+id,user)}

  changeMyPassword(id, user)
  {console.log(user.id)
  return this.http.post(this.changepassword+id,user);}

  getRequest()
  { return this.http.get(this.reqUrl); }

  getPatietReport()
  { return this.http.get(this.reqUrl)}

  getPatietHistory()
  { return this.http.get(this.reqUrl +'/'+sessionStorage['userId']);}

  ListManagerStatus()
  {return this.http.get(this.managerstatus + '/' + sessionStorage['userId']);}

  getRequestList()
  { return this.http.get(this.requrl);}

  getData():Observable<any>
  { return this.http.get(this.baseUrl);}  

  getSingleUserDetails(id)
  {return this.http.get(this.myprofile + "myprofile"+"/"+id)}


  getSinglePatientDetails(id)
  {return this.http.get(this.myprofile + "myprofile"+"/"+id)}

  getPatientList()
  {return this.http.get(this.myprofile + "patient");}

  getDonorHistory()
  { return this.http.get(this.donor+'/'+sessionStorage['userId'])
  }

  getDonorList()
  { return this.http.get(this.donor);}

  getDonorReport()
  { return this.http.get(this.donor)}

  CheckBloodAvaliable()
  {return this.http.get(this.stocklist);}

  ListAllStockUnits()
  {return this.http.get(this.stocklist);}

  ListStockByGroupApos()
  {return this.http.get(this.stocklist+"/"+"A+");}
  
  ListStockByGroupAneg()
  {return this.http.get(this.stocklist+"/"+"A-");}

  ListStockByGroupBpos()
  { return this.http.get(this.stocklist+"/"+"B+");}

  ListStockByGroupBneg()
  { return this.http.get(this.stocklist+"/"+"B-");}

  ListStockByGroupOpos()
  {return this.http.get(this.stocklist+"/"+"O+");}

  ListStockByGroupOneg()
  { return this.http.get(this.stocklist+"/"+"O-");}

  ListStockByGroupABpos()
  { return this.http.get(this.stocklist+"/"+"AB+");}

  ListStockByGroupABneg()
  { return this.http.get(this.stocklist+"/"+"AB-");}


  getDataById(camp_id)
  {return this.http.get(this.camplist+camp_id);}

  Update(empObj)
  {return this.http.put(this.camplist + empObj.No ,empObj);}

  deletecamp(camp_id)
  { return this.http.delete(this.camplist+camp_id);}



  ListPendingManager()
  {
    return this.http.get(this.manager + "pending");
  }

  approveManager(u_id)
  { console.log("in approve manager"+u_id);
    return this.http.put("http://15.206.123.53:7070/test_boot/user/update/"+ u_id,u_id);}

  ListApprovedManager()
  {return this.http.get(this.manager + "approved");}

  ListAllPendingRequest()
  {return this.http.get(this.requester + "pending/list");}

  approveRequest(requster_id)
  { console.log("in approve requester"+requster_id);
    return this.http.put(this.requester + "request/" + requster_id, requster_id)}

  ListAllApprovedRequest()
  {return this.http.get(this.requester + "approved/list");}

   insertUserDetails(user)
  {
    
    console.log("insertUserDetails() method called!!!")
    console.log(user)
    let observableResult = this.http.post("http://15.206.123.53:7070/test_boot/user/",user);
    observableResult.subscribe((result: any)=>{
      console.log(result);
        this.message = "Record Added!";
      //In case of error print result
      //console.log(result.name);
    });
  }

  insertPatientDetails(user)
  {
       console.log("in  service"+user);
       let observableResult= this.http.post("http://15.206.123.53:7070/test_boot/requester/",user);
      observableResult.subscribe((res)=>{
      console.log(res);
        }) 
  }

  addCamp(campObj)
    {
          let observableResult =  this.http.post("http://15.206.123.53:7070/test_boot/camps",campObj);
          observableResult.subscribe((result: any)=>{
            console.log(result);
              this.message = "Record Added!";
            //In case of error print result
            //console.log(result.name);
          }); 
    }

    addStock(stockObj)
    {
      console.log(stockObj);
          let observableResult =  this.http.post("http://15.206.123.53:7070/test_boot/stock/d",stockObj);
          observableResult.subscribe((result: any)=>{
            console.log(result);
              this.message = "Record Added!";
            //In case of error print result
            //console.log(result.name);
          }); 
    }

    insertDonation(donationObj,donor_id)
    {
      let observableResult = this.http.post("http://15.206.123.53:7070/test_boot/donation/"+donor_id,donationObj);

      observableResult.subscribe((result: any)=>{
        console.log(result);
          this.message = "Record Added!";
        //In case of error print result
        //console.log(result.name);
      });

    }
 


}
