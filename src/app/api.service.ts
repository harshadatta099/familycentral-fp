import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw4REEzOEYzNi05NUVBLTQzRjAtQTZDQy0wOERCQTgxMEM5RkEiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MzU0NTMyNywiZXhwIjoxNjkzNjMxNzI3LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.Vl2fXmZz7tJft64owJL8V13JyuQGYcqqNWpDNS3Puj2BW_KeVHTDlYLDcl9_fVyEv0P76JiS0WxxKENhJpS6k2nmaQAN4XU9C63LXoDACmHpRaAHzsVw54OZoMhWEcng7aAZaOcuZ-4bRNu7rDy3hAVDvDOiW-nJoBLZ2jOLhwsVnld4E3jWf5yPWnp-arLxsoGAa-Jhk3AWsFSs9nUvPrOwPoLjedsWcZmH9swnROTEj16nDufH4Coq1o9pzuUqLNymS-nkHk6NugdOQ4NrQ-rtLVb2doON4q5hfUdlg3cPjQLK0ES732Is_Tj9mAT5yAXYqxVMNfmxtG9bhR0gww';

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
