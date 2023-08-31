import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token = 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHxDQjFENTU0Ny1FNzgyLTQxNkEtQUZGQS0wOERCQTJFMzI3N0UiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MzQ1NjE4NCwiZXhwIjoxNjkzNTQyNTg0LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.rWWrPruniUBozk6s3uCEfEhDBOIpIwAGOWI85DssWnWcgWHFM-Uct5QesrctUERAp8aw5N3TaeL5leC_OIL4pg0VQAx3Ui8OswyfCDohXJcIUOH3wXlxvVEcLULYA_C2tKyDaciQz7rhuKeT8jWIE8srF-4u8A7irL1FklxQQ_cFZo4eb_hv98uN8SJwhE2rUPOc9vkY6-3mdmfYSxMUNyK_sA3Mk5HcAxlUK2Saqvx0nY5mOxXU6cKhnKR2jdg-_rU87ksaejxntjeIzKbv4y662LLqO-9rG37Y3zeoP7cMDRxIf48ZTgFc0by48FC52lb99Im2D82I0RpfbGPnBA';

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
