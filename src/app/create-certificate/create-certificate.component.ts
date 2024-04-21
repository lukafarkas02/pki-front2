import { Component } from '@angular/core';
import {CertificateParamsDTO} from "../DTOs/certificateParamsDTO";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: ['./create-certificate.component.css']
})
export class CreateCertificateComponent {
//For certificateParamsDTO
  certificateType: string = "";
  notBefore: Date = new Date();
  issuer: string = "";
  keyUsage: Array<string> = [];
  extendedKeyUsage: Array<string> = [];
  commonName: string = "";
  sureName: string = "";
  givenName: string = "";
  organization: string = "";
  organizationUnit: string = "";
  country: string = "";
  email: string = "";

  certificateParamsDTO: CertificateParamsDTO = new CertificateParamsDTO();

  password: string = "";

  digitalSignature: boolean = false;
  nonRepudiation: boolean = false;
  codeSigning: boolean = false;
  emailProtection: boolean = false;

  startDate: string = "";
  startTime: string = "";

  selectedSerialNumber: string = "";

  constructor(
    private http: HttpClient
    ) {}

  calculateDate(){
    const start = this.startDate + "T" + this.startTime;

    this.notBefore = new Date(start);
  }

  checkBoxValues(){
    this.keyUsage = [];
    this.extendedKeyUsage = [];

    const digitalSignature = (this.digitalSignature) ? "digitalSignature" : "";
    const nonRepudiation = (this.nonRepudiation) ? "nonRepudiation" : "";
    this.keyUsage.push(digitalSignature, nonRepudiation);

    const codeSigning = (this.codeSigning) ? "codeSigning" : "";
    const emailProtection = (this.emailProtection) ? "emailProtection" : "";
    this.extendedKeyUsage.push(codeSigning, emailProtection);
  }

  createCertificate(){
    this.calculateDate();
    this.checkBoxValues();

    console.log("USAO")
    this.certificateParamsDTO = {
      certificateType : this.certificateType,
      notBefore : this.notBefore,
      issuer : this.selectedSerialNumber,
      keyUsage : this.keyUsage,
      extendedKeyUsage : this.extendedKeyUsage,
      commonName : this.commonName,
      surname : this.sureName,
      givenName : this.givenName,
      organization : this.organization,
      organizationUnit : this.organizationUnit,
      country : this.country,
      email : this.email,
    }

    //TODO: Poslati DTO na server i kreirati sertifikat an osnovu prosledjenog DTO-a
    const url = 'http://localhost:8083/certificates/createCertificate'; // Zamijenite sa pravim URL-om

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(url, this.certificateParamsDTO, httpOptions)
      .subscribe(
        (response) => {
          console.log('Sertifikat je uspešno kreiran.', response);
          // Ovdje možete dodati logiku koja se izvršava nakon uspešnog kreiranja sertifikata
          this.reset();
        },
        (error) => {
          console.error('Došlo je do greške prilikom kreiranja sertifikata.', error);
          // Ovdje možete dodati logiku za rukovanje greškom
        }
      );

    this.reset();
  }

  reset() {
    this.certificateType = "";
    this.notBefore = new Date();
    this.issuer = "";
    this.keyUsage = [];
    this.extendedKeyUsage = [];
    this.commonName = "";
    this.sureName = "";
    this.givenName = "";
    this.organization = "";
    this.organizationUnit = "";
    this.country = "";
    this.email = "";
    this.password = "";
    this.digitalSignature = false;
    this.nonRepudiation = false;
    this.codeSigning = false;
    this.emailProtection = false;
  }
}
