import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHxDNThDN0QzNS1BMjJFLTQzRjMtMkNFRi0wOERCQTdGNTI2RTIiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MzI5MTEyNCwiZXhwIjoxNjkzMzc3NTI0LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.XGTcNbwsmr0cFVzOaRAZxPY37VeikgkHg6xNU_NamxwJWN5p_FFtnSC6FYzXFqc7JR4V7zHfO-TivH79Cz0wysg5CFyCE1piFEuDPRKn76S8mp5ENQdYsB-4UNeFrfs-ejFU3zGk7dPn0Ee3uECFaTpj2OjBjc3UMR5ZPYAWmJmtQWd9ZqrJTEOEks-u8Nu3ajDZYJE8vbVWDiorgGXC9Id6_GH7VMXLakQQdo1sxSVAK8rtv6pcumPKE48EIcMCjIJnJe0JNB8okhASJhNSFNjbmXQ1CmKeJtsqBztKGh9hl6oQOfr_up3rXfNBbuh1aXGg1HoSzxYmB_hhSxCJSw';

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


}
