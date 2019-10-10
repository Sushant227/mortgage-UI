import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Data3 {
  accountNumber: number;
    totalAmount: number;
    loanAmount: number;
    loanTenure: number;
    rateOfInterest: number;
    emi: number;
}
@Component({
  selector: 'app-loansummary',
  templateUrl: './loansummary.component.html',
  styleUrls: ['./loansummary.component.css']
})
export class LoansummaryComponent implements OnInit {
  @Input() childMessage: string;
  customerId: string;
  data3: Object = '';
  constructor(private route: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.customerId = sessionStorage.getItem("customerId");
    this.http.get(`http://10.117.189.134:8082/mortgage/api/loans/${this.customerId}/summary`).subscribe((response) => {
      if (response) {
        this.data3 = response;
        return this.data3;
        console.log(response)
      }
    },(err) => {
      this.data3 = err.error.message;
      console.log(err.error.message);
      // return this.data3;
      console.log('err',err)
    });
  }

}
