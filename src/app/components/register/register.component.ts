import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  customerName: string;
  emailId: string;
  mobileNumber: number;
  confirmPassword: any;
  dob: Date;
  date: string;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route:Router,
      private http:HttpClient
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        customerName: ['',[Validators.required]],
          mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
          dob: ['',[Validators.required]],
          emailId: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      
       this.date = this.replaceAll(this.registerForm.value.dob,'-','/');
      // console.log(this.date);
      // this.date = new Date().toDateString();
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      // console.log(this.registerForm);
      var reqObj = {
         "customerName": this.registerForm.value.customerName,
         "emailId": this.registerForm.value.emailId,
         "mobileNumber" :this.registerForm.value.mobileNumber,
         "dob" : this.date
      };
    this.http.post(environment.baseUrl + '/mortgage/api/register', reqObj).subscribe((response) => {
        if (response) {
            this.data = response;
            alert(response['message'])
              this.customerName = this.data.customerName;
              this.emailId = this.data.emailId;
              this.mobileNumber = this.data.mobileNumber;
              this.dob = this.data.dob;
              this.route.navigate(['/dashboard']);
        }
      
        // console.log(this.registerForm);
        
        
    }, (err) => {
      console.log("rerror",err)
      alert(err.message);
  });
    
  }
   replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
}
  
}
