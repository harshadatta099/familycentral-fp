import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-listof-customers',
  templateUrl: './listof-customers.component.html',
  styleUrls: ['./listof-customers.component.css']
})
export class ListofCustomersComponent {
  showTable = true;
  data: any;

  constructor(private apiService: ApiService) {}

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
