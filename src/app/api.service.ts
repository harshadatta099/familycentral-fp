import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw0RDI3NTYxMS1ERDBDLTQ4REYtMTQ0Qi0wOERCOTc1MEZCMjkiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5Mzg5MDM5OSwiZXhwIjoxNjkzOTc2Nzk5LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.ecrdlS9KgbYF1uGogSvzAzdaGPSKUQyLN2fzXqEtVuQX1039UxCojS97ROGvEbVkvAfEUQJ0bjDzkmKJgOrByqUb9RFahOos9BiJVw8Rtq8PQrnBGGcGAPOBa0C2onxd0tzysnXXNr8S9KE0buRPRHDdeEMjmt_30kNC9Fu17W8mx-143rhY6UzOmPD4NMGuuo4WqKqAG8DPGhq-kUdTf4VuRoSo5Wc25w1bpyehbQehuOv19f1S_EiEd3VbnNQuqMYE0JiH1ZElfbCTinqczIF1BaYuEOh97XogMPlmwa6EfRry0JZj6N6z7dfNPRNnuFxSV78xEjv8kglkw_XUlA';

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
