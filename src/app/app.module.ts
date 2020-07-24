import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModel, FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BloodtipsComponent } from './bloodtips/bloodtips.component';
import { RequestComponent } from './request/request.component';
import { PatientComponent } from './patient/patient.component';
import { EditComponent } from './edit/edit.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PatientrequestComponent } from './patientrequest/patientrequest.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { DonorComponent } from './donor/donor.component';
import { DonorhistoryComponent } from './donorhistory/donorhistory.component';
import { AdminComponent } from './admin/admin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { DonorreportComponent } from './donorreport/donorreport.component';
import { PatientreportComponent } from './patientreport/patientreport.component';
import { ManagerComponent } from './manager/manager.component';
import { CheckbloodavaliabilityComponent } from './checkbloodavaliability/checkbloodavaliability.component';
import { ListofdonatedbloodComponent } from './listofdonatedblood/listofdonatedblood.component';
import { DeleteComponent } from './delete/delete.component';
import { ListofrequestedbloodComponent } from './listofrequestedblood/listofrequestedblood.component';
import { ListofalldonorsComponent } from './listofalldonors/listofalldonors.component';
import { ListofallpatientComponent } from './listofallpatient/listofallpatient.component';
import { CampdetailsComponent } from './campdetails/campdetails.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { EditcampComponent } from './editcamp/editcamp.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { AddcampComponent } from './addcamp/addcamp.component';
import { DonormedicaldetailsComponent } from './donormedicaldetails/donormedicaldetails.component';
import { ApprovemanagerComponent } from './approvemanager/approvemanager.component';
import { ApprovedmanagerComponent } from './approvedmanager/approvedmanager.component';
import { RequestpendingComponent } from './requestpending/requestpending.component';
import { RequestapprovedComponent } from './requestapproved/requestapproved.component';
import { PatientapproveComponent } from './patientapprove/patientapprove.component';
import { AddstockComponent } from './addstock/addstock.component';
import { ManagerstatuslistComponent } from './managerstatuslist/managerstatuslist.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutusComponent,
    BloodtipsComponent,
    RequestComponent,
    PatientComponent,
    EditComponent,
    ChangepasswordComponent,
    PatientrequestComponent,
    BloodrequestComponent,
    DonorComponent,
    DonorhistoryComponent,
    AdminComponent,
    EditadminComponent,
    DonorreportComponent,
    PatientreportComponent,
    ManagerComponent,
    CheckbloodavaliabilityComponent,
    ListofdonatedbloodComponent,
    DeleteComponent,
    ListofrequestedbloodComponent,
    ListofalldonorsComponent,
    ListofallpatientComponent,
    CampdetailsComponent,
    PaymenthistoryComponent,
    EditcampComponent,
    ViewstockComponent,
    AddcampComponent,
    DonormedicaldetailsComponent,
    ApprovemanagerComponent,
    ApprovedmanagerComponent,
    RequestpendingComponent,
    RequestapprovedComponent,
    PatientapproveComponent,
    AddstockComponent,
    ManagerstatuslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      // {path: "", component: HomeComponent },
      { path: "", component: HomeComponent},
      {path: "home", component: HomeComponent },
      {path: "login", component: LoginComponent },
      {path: "register", component: RegisterComponent },
      {path: "contact", component: ContactComponent },
      {path: "about", component: AboutusComponent },
      {path: "bloodtips", component: BloodtipsComponent },
      {path: "request", component: RequestComponent },
      {path: "patient", component: PatientComponent },
      {path: "edit", component: EditComponent },
      {path: "editcamp/:camp_id", component: EditcampComponent },
      {path: "delete/:camp_id", component: DeleteComponent },
      {path: "changepassword", component: ChangepasswordComponent },
      {path: "patientrequest", component: PatientrequestComponent },
      {path: "bloodrequest", component: BloodrequestComponent },
      {path: "donor", component: DonorComponent },
      {path: "donorhistory", component: DonorhistoryComponent },
      {path: "admin", component: AdminComponent },
      {path: "editadmin", component: EditadminComponent },
      {path: "donorreport", component: DonorreportComponent },
      {path: "patientreport", component: PatientreportComponent },
      {path: "patientreport", component: PatientreportComponent },
      {path: "manager", component: ManagerComponent },
      {path: "checkbloodavaliability", component: CheckbloodavaliabilityComponent },
      {path: "listofdonatedblood", component: ListofdonatedbloodComponent },
      {path: "listofrequestedblood", component: ListofrequestedbloodComponent },
      {path: "listofalldonors", component: ListofalldonorsComponent },
      {path: "listofallpatient", component: ListofallpatientComponent },
      {path: "campdetails", component: CampdetailsComponent },
      {path: "paymenthistory", component: PaymenthistoryComponent },
      {path: "viewstock", component: ViewstockComponent },
      {path: "addcamp", component: AddcampComponent },
      {path: "donormedicaldetails", component: DonormedicaldetailsComponent },
      {path: "approvemanager", component: ApprovemanagerComponent },
      {path: "approvedmanager", component: ApprovedmanagerComponent },
      {path: "requestpending", component: RequestpendingComponent },
      {path: "requestapproved", component: RequestapprovedComponent },
      {path: "addstock", component: AddstockComponent },
      {path: "managerstatuslist", component: ManagerstatuslistComponent }
    ])

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor()
  {
    console.log("App Module Created");
  }
}
