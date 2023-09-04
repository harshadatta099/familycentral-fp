import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw0RDI3NTYxMS1ERDBDLTQ4REYtMTQ0Qi0wOERCOTc1MEZCMjkiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MzgwMzU3NywiZXhwIjoxNjkzODg5OTc3LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.eG-7N_b-BrV0U_uhdKo9ABOMdHPH2EqJIVzronUsdlfzyMsARgQ-IEwr_bD4kT9XWJy0jmiIQDMjaelzg69JvTME-J6Jd0051hu2_LXqugGFPia0Tmgm0cDw6GmOcXSRpHe7aq73MEnL_WFaUhOu8ny2-sDyhKerVByUJhs4h002b_QSLqfCBcbbEGO_wEeqEiK8cVY_tJp0D59GrY13kYjH57veh-OdEOfXLhuCoFp-NxFNNkE1qwsL2i-GewY_wzuBGYbvTs2yQfZI7wj2scsGA8PcYhUJwRZcGthsh8fkXU3kO1uALPm33ynKc5VAejLfOcn8MMRhUSHHUQ2XSg';

  constructor(private http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: this.token,
    });
  }

  getFinancePlannerInfo(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.baseUrl}/FinancePlanner/GetFinancePlannerInfo`, { headers });
  }

  getCustomerInfo(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.baseUrl}/FinancePlanner/Customers`, { headers });
  }

  addCustomer(customer: any): Observable<any> {
    const headers = this.setHeaders();
    return this.http.post(`${this.baseUrl}/FinancePlanner/Customer`, customer, { headers });
  }
  
  deleteCustomer(id: string): Observable<any> {
    const headers = this.setHeaders();
    return this.http.delete(`${this.baseUrl}/FinancePlanner/Customer/${id}`, { headers });
  }
  uploadFile(file: File, formdata: any): Observable<any> {
    const headers = this.setHeaders();
    //const headers = new HttpHeaders();
    // Append any headers if needed
    headers.append('Content-Type', 'multipart/form-data');

 

    const url = 'https://familycentraldevapi.azurewebsites.net/api/FinancePlanner/Upload'; // Replace with your API endpoint

 

    const formData = new FormData();
    formData.append('file', file);
    formData.append('value', JSON.stringify(formdata)); // Send associated data

 

    return this.http.post(url, formData, { headers });
  }

  uploadCustomerFile(file: File, formdata: any): Observable<any> {
    const headers = this.setHeaders();
    //const headers = new HttpHeaders();
    // Append any headers if needed
    headers.append('Content-Type', 'multipart/form-data');

 

    const url = 'https://familycentraldevapi.azurewebsites.net/api/FinancePlanner/CustomerWithFile'; // Replace with your API endpoint

 

    const formData = new FormData();
    formData.append('file', file);
    formData.append('value', JSON.stringify(formdata)); // Send associated data

 

    return this.http.post(url, formData, { headers });
  }


}
