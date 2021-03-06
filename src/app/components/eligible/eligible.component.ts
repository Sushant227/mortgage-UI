import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eligible',
  templateUrl: './eligible.component.html',
  styleUrls: ['./eligible.component.css']
})
export class EligibleComponent implements OnInit {
  
  checkForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  propertyValue: number;
  propertyType: string;
  loanTenure: number;
annualSalary: number;
loanAmount: number;
  data3: any;
  totalAmount: any;
  emi: any;
  loanInfo: Object;
  responsedata:any;
  display: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route:Router,
      private http:HttpClient
  ) { 
  }

  ngOnInit() {
      this.checkForm = this.formBuilder.group({
        propertyValue: ['',[Validators.required]],
        propertyType: ['',[Validators.required]],
          // loanTenure: ['',[Validators.required,Validators.min(1),Validators.max(20)]],
          loanTenure: ['', Validators.required],
          annualSalary: ['',[Validators.required]],
          loanAmount: ['',[Validators.required]]
          
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.checkForm.controls; }

  onSubmit() {
    
      this.submitted = true;

      // stop here if form is invalid
      if (this.checkForm.invalid) {
          return;
      }
      console.log(this.checkForm);
      var reqObj = {
        "customerId" : sessionStorage.getItem("customerId"),
         "propertyValue": this.checkForm.value.propertyValue,
         "propertyType": this.checkForm.value.propertyType,
         "loanTenure" : this.checkForm.value.loanTenure,
         "annualSalary" : this.checkForm.value.annualSalary,
         "loanAmount" : this.checkForm.value.loanAmount
      };

      console.log(reqObj);
    this.http.post(environment.baseUrl + '/mortgage/api/loanInfo', reqObj).subscribe((response) => {
        if (response) {
            this.data = response;

            alert(response['message']);
            if(response['message'] == "Enquiry Successfull"){

              this.showDialog();
            }
            else{
              this.route.navigate(['/loansummary']);
            }
              // this.propertyValue = this.data.propertyValue;
              // this.propertyType = this.data.propertyType;
              // this.loanTenure = this.data.loanTenure;
              // this.annualSalary = this.data.annualSalary;
              // this.loanAmount = this.data.loanAmount;
              
              // this.route.navigate(['/login']);
              console.log(this.data);
              sessionStorage.setItem("totalAmount", response['totalAmount']);
              sessionStorage.setItem("emi", response['emi']);
             
              
        };(err) => {
         
          this.data = err.error.message;
          console.log(err.error.message);
          // return this.data3;
          console.log('err',err);
        }
      
        console.log(this.checkForm);
        
      });
      
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  

  showDialog() {
      this.display = true;
  }

  applyLoan(){
    var reqObj1 = {
      "customerId" : sessionStorage.getItem("customerId"),
      "totalAmount" : sessionStorage.getItem("totalAmount"),
      "emi": sessionStorage.getItem("emi"),
       "loanAmount" : this.checkForm.value.loanAmount,
       "loanTenure" : this.checkForm.value.loanTenure,
       "propertyType" : this.checkForm.value.propertyType,
       "propertyValue" : this.checkForm.value.propertyValue
    };

    console.log(reqObj1);
  this.http.post(environment.baseUrl + '/mortgage/api/loan', reqObj1).subscribe((response) => {
      if (response) {
          this.loanInfo = response;
          alert(response['message'])
            this.totalAmount = this.data.totalAmount;
            this.emi = this.data.emi;
            this.loanAmount = this.data.loanAmount;
            this.loanTenure = this.data.loanTenure;
            this.propertyType = this.data.propertyType;
            this.propertyValue = this.data.propertyValue;
            console.log(this.loanInfo);
            // then reset the form
            this.reset();
            this.route.navigate(['/loansummary']);
            
        
            
      };(err) => {
        this.loanInfo = err.error.message;
        console.log(err.error.message);
        // return this.data3;
        console.log('err',err);
      }
    
      
    });
  }
  reset() {
        this.checkForm.reset();
    }
}
