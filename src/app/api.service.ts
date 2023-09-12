import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://familycentraldevapi.azurewebsites.net/api';
  private token =
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHwyRkFGREUzMi05OTVGLTRGQTQtMzgxNi0wOERCQjA3MDRCQjUiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5NDQzNDgyNiwiZXhwIjoxNjk0NTIxMjI2LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.RsdeEdG3KgUHFTElK1GzfgNh4DbdchWLJ3VUiuzI0voG80ICa1XJZb5LUdwpxpsu-vhmscTcFeFkhywq2VupOUrA9aMZGRTGHamYae0ky__AuHXcw32P4z-4LaoQM6Z845amWiIZxgtWYooHR5H_GVsllyf7IHuk-Va2NpP1WEbhvehpnmfznYmxvyMYPjVOkzRb3nmaNfZ-BtlrkzeQr86--5uWvW4L2ZLZXNe0CaeG8A9crsRUMfGKJteE9SxGaPS5amQmT8STBx1Tb6P80pmCmKoTZQGInVz-OS5FDu60EIAGYb17X8PPPau7m2yE6dG0jspM25MTgWm1UABrRg';

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
