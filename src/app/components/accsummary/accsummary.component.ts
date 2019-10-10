import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface Data2 {
   accountNumber: number;
     accountBalance: number;
     customerName: string;
     statusCode: number;
     message: string;
}
@Component({ 
  selector: 'app-accsummary',
  templateUrl: './accsummary.component.html',
  styleUrls: ['./accsummary.component.css'] })
export class AccsummaryComponent implements OnInit {
  customerId: any;
  router: any;
  data2: any = '';
  constructor(private route: Router,
    private http: HttpClient) { }
 
  ngOnInit() {
    
    this.customerId = sessionStorage.getItem("customerId");
    this.http.get(`http://10.117.189.192:8082/mortgage/api/customers/${this.customerId}`).subscribe((response) => {
      if (response) {
        this.data2 = response;
        return this.data2;
        // console.log(response)
      }
    });
  }
  
}