import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent implements OnInit{
  certificates: any[] = [];
  constructor(
    //private http: HttpClient,
    //private certificateService: CertificateService
    private http: HttpClientModule
  ) {
    this.certificates = [
      {
        id: 'ABC123',
        subject: 'Certificate Subject A',
        issuer: 'Issuer A',
        validFrom: '1.1.2023',
        validTo: '01.01.2025'
      },
      {
        id: 'DEF456',
        subject: 'Certificate Subject B',
        issuer: 'Issuer B',
        validFrom: '1.2.2023',
        validTo: '02.02.2025'
      }
    ];
  }

  ngOnInit() {
    /*
    TODO: Pozvati metodu iz servisa koja dobavlja sve sertifikate sa servera i popuniti certificates listu
     */
  }

  revoke(){
    /*
    TODO: Pozzvati metodu iz servisa koja revoke-uje sertifikat
     */
  }
}
