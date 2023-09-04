import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-listof-customers',
  templateUrl: './listof-customers.component.html',
  styleUrls: ['./listof-customers.component.css']
})
export class ListofCustomersComponent {
  showTable = true;
  data: any;
  name:string | undefined;
  phone:number | undefined;
  email:string | undefined;
  constructor(private apiService: ApiService,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.apiService.getCustomerInfo().subscribe(
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
  
  openPopup(id:number) {
    this.displayStyle = "block";
    for(let customer of this.data.data) {
      if(customer.id==id) {
        this.name=customer.firstName+" "+customer.lastName;
        this.phone=customer.phoneNumber;
        this.email=customer.email;
      }
    }
    
  }
  closePopup() {
    this.displayStyle = "none";
    
  }

  
  @HostListener('document:keydown.escape', ['$event'])
  closeOnEsc(event: KeyboardEvent) {
    // Check if the Escape key was pressed
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  editDetails() {
    alert("Updated Successfully!");
  }

  deleteCustomer(id: any) {
    this.apiService.deleteCustomer(id).subscribe(
      () => {
        // Handle the success response here
        console.log('Customer deleted successfully');
      },
      (error) => {
        console.error('Error deleting customer:', error);
      }
    );
  }
}
