import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CreateCertificateComponent} from "./create-certificate/create-certificate.component";
import {CertificatesListComponent} from "./certificates-list/certificates-list.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'createCertificate', component: CreateCertificateComponent},
  { path: 'certificatesList', component: CertificatesListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
