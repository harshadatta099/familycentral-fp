import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';

 

@Component({

  selector: 'app-addcustomer',

  templateUrl: './addcustomer.component.html',

  styleUrls: ['./addcustomer.component.css']

})

export class AddcustomerComponent {

  firstNameError: string = '';

  lastNameError: string = '';

  phoneNumberError: string = '';

  emailError: string = '';

  public selectedfile: File | null = null;

  finacialCustomer: any = {

    firstName: '',

    lastName: '',

    email: '',

    phoneNumber: '',

    description: '',

    familyGroupName: '',

    FileName: '',

    Thumbnail: false,

    Scan: false

  };

  finacialCustomer1: any = {

    firstName: '',

    lastName: '',

    email: '',

    phoneNumber: '',

    description: '',

    familyGroupName: '',

  };

 

  isSaveButtonDisabled: boolean = true;

 

  validateFirstName() {

    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;

    this.firstNameError = firstName.trim() === '' ? 'First name is required.' : '';

    this.updateSaveButtonState();

  }

 

  validateLastName() {

    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;

    this.lastNameError = lastName.trim() === '' ? 'Last name is required.' : '';

    this.updateSaveButtonState();

  }

 

  validatePhoneNumber() {

    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;

    const phoneNumberPattern = /^[0-9]{10}$/;

    this.phoneNumberError = !phoneNumber.match(phoneNumberPattern) ? 'Please enter a valid 10-digit phone number.' : '';

    this.updateSaveButtonState();

  }

 

  validateEmail() {

    const email = (document.getElementById("email") as HTMLInputElement).value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    this.emailError = !email.match(emailPattern) ? 'Please enter a valid email address.' : '';

    this.updateSaveButtonState();

  }

 

  updateSaveButtonState() {

    const firstName = (document.getElementById("firstName") as HTMLInputElement).value.trim();

    const lastName = (document.getElementById("lastName") as HTMLInputElement).value.trim();

    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value.trim();

    const email = (document.getElementById("email") as HTMLInputElement).value.trim();

 

    // Check if all required fields are empty

    this.isSaveButtonDisabled = firstName === '' || lastName === '' || phoneNumber === '' || email === '';

  }

 

 

 

 

  constructor(private fileUploadService: ApiService) { }

 

  onFileSelected(event: any) {

 

    const selectedFile = event.target.files[0];

    this.handleSelectedFile(selectedFile);

  }

 

  handleSelectedFile(file: File): void {

    const selectedFilesContainer = document.getElementById('selectedFilesContainer');

    this.selectedfile = file;

  }

 

  uploadFile(): void {

    this.finacialCustomer.firstName = (document.getElementById("firstName") as HTMLInputElement).value;

    this.finacialCustomer.lastName = (document.getElementById("lastName") as HTMLInputElement).value;

    this.finacialCustomer.phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;

    this.finacialCustomer.email = (document.getElementById("email") as HTMLInputElement).value;

    this.finacialCustomer.description = (document.getElementById("message") as HTMLInputElement).value;

    this.finacialCustomer.FileName = this.selectedfile?.name || "";

    if (this.selectedfile) {

     

      this.fileUploadService.uploadCustomerFile(this.selectedfile, this.finacialCustomer)

        .subscribe(

          response => {

            alert('Customer added successfully');

            console.log('Customer added successfully:', response);

            // Handle success here

          },

          error => {

            console.error('Failed:', error);

            // Handle error here

          }

        );

 

    }

    else {

 

      this.finacialCustomer1.firstName = (document.getElementById("firstName") as HTMLInputElement).value;

      this.finacialCustomer1.lastName = (document.getElementById("lastName") as HTMLInputElement).value;

      this.finacialCustomer1.phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;

      this.finacialCustomer1.email = (document.getElementById("email") as HTMLInputElement).value;

      this.finacialCustomer1.description = (document.getElementById("message") as HTMLInputElement).value;

      this.fileUploadService.addCustomer(this.finacialCustomer1).subscribe(

          response => {

            alert('Customer added successfully');

            console.log('Customer added successfully:', response);

            // Handle success here

          },

          error => {

            console.error('Failed:', error);

            // Handle error here

          }

        );

    }

 

  }

}

 