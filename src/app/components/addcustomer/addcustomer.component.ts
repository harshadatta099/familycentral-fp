import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css'],
})
export class AddcustomerComponent {
  customerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.phoneNumberValidator]],
      email: ['', [Validators.required, this.emailValidator]],
      message: [''],
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
      this.apiService.addCustomer(this.customerForm.value).subscribe(
        res=>{
          alert("Customer Added successfully");
          console.log("Customer Added successfully: ", res);
        },
        error=>{
          console.error("Failed: ",error);
        }
      )
    }
  }

  phoneNumberValidator(control: FormControl) {
    const phoneNumber = control.value;
    const phonePattern = /^[0-9]{10}$/; 
    if (!phonePattern.test(phoneNumber)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }

  emailValidator(control: FormControl) {
    const email = control.value;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
    if (!emailPattern.test(email)) {
      return { invalidEmailFormat: true };
    }
    return null;
  }
}
