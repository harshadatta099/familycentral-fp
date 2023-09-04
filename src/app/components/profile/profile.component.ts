import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any;
  firstNameError: string = '';
  lastNameError: string = '';
  phoneNumberError: string = '';
  emailError: string = '';

  constructor(private apiService :ApiService) {}

  ngOnInit() {
    
    this.apiService.getFinancePlannerInfo().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  validateFirstName() {

    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    this.firstNameError = firstName.trim() === '' ? 'First name is required.' : '';
  }

  validateLastName() {
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    this.lastNameError = lastName.trim() === '' ? 'Last name is required.' : '';
  }

  validatePhoneNumber() {
    const phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value;
    const phoneNumberPattern = /^[0-9]{10}$/;
    this.phoneNumberError = !phoneNumber.match(phoneNumberPattern) ? 'Please enter a valid 10-digit phone number.' : '';
  }

  validateEmail() {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.emailError = !email.match(emailPattern) ? 'Please enter a valid email address.' : '';
  }

}
