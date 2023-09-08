import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token =
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw0RDI3NTYxMS1ERDBDLTQ4REYtMTQ0Qi0wOERCOTc1MEZCMjkiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NDE1ODI0NCwiZXhwIjoxNjk0MjQ0NjQ0LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.PfbZ9_HwiyvICIhgZOMg7OIzAzvzfp5MABN4V-gLWl6TN_KSKVWZsxn0LEfXoXuTY4Q_9jz_srPskC1k17t1zvnLkqXSWd9409bVRoQIzuqe0QlhdmHLMDXVChvNY-4nVGiZtlZ9YkfZj0gI6Tb_22QFdKPx26ejg_NhZ8JuGyCYF9JNYprVCfhw2I5ofUXNv4ICCADuRe8yUb5W36xPcgNdg0m5MkBt4QV1MhGOKbBB560B0h9fJq80RENJQ4rbk7ZKkOrLdFz258VDq6A_MhioSel5qykFFseV22x0YqNpbT-QuK5s5LkfDvy4FJNKVtXdFqNpN7KElBc6iHFutA';

  constructor(private http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: this.token,
    });
  }

  getFinancePlannerInfo(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(
      `${this.baseUrl}/FinancePlanner/GetFinancePlannerInfo`,
      { headers }
    );
  }

  getCustomerInfo(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.baseUrl}/FinancePlanner/Customers`, {
      headers,
    });
  }

  addCustomer(customer: any): Observable<any> {
    const headers = this.setHeaders();
    return this.http.post(`${this.baseUrl}/FinancePlanner/Customer`, customer, {
      headers,
    });
  }

  deleteCustomer(id: string): Observable<any> {
    const headers = this.setHeaders();
    return this.http.delete(`${this.baseUrl}/FinancePlanner/Customer/${id}`, {
      headers,
    });
  }
  uploadFile(file: File, formdata: any): Observable<any> {
    const headers = this.setHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('value', JSON.stringify(formdata)); // Send associated data

    return this.http.post(`${this.baseUrl}/FinancePlanner/Upload`, formData, {
      headers,
    });
  }

  uploadCustomerFile(file: File, formdata: any): Observable<any> {
    const headers = this.setHeaders();

    headers.append('Content-Type', 'multipart/form-data');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('value', JSON.stringify(formdata));

    return this.http.post(
      `${this.baseUrl}/FinancePlanner/CustomerWithFile`,
      formData,
      { headers }
    );
  }
}
