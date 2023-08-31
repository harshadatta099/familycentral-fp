import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private token ='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjUxQ3V3N2dCYmNRUUdtRTJkQ0NhUSJ9.eyJpc3MiOiJodHRwczovL2Rldi1mYW1pbHljZW50cmFsLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHxFRThGMjY1OC03NTc2LTQzNDktRERDRC0wOERCQThCMzEwM0MiLCJhdWQiOlsiaHR0cHM6Ly9mYW1pbHljZW50cmFsZGV2YXBpLmF6dXJld2Vic2l0ZXMubmV0LyIsImh0dHBzOi8vZGV2LWZhbWlseWNlbnRyYWwudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MzQ1ODMxNiwiZXhwIjoxNjkzNTQ0NzE2LCJhenAiOiJURU1UcXFic2RaZkZPNGltZ2pONzJSVVN6TFUxT1FwYyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.fK4I-0EK6VpSDu2v5_AO_TPlZDhVl9PIpz01DwzQYuu3pKSGZCQmrbMogd2ANouSDdnQAubR_AakXiGrsyckbCtOx2MLhRiUYzloF_JD8g7Q-Ez0GUppEUFhmqneTgARl3bxh4NhnwdfXAE_qnETo0uuUH6-LL3Hu7EGIsFwo_ArtLjUr7iuwofVXgS4sD0tGsFzvLwaDj5sl1fcUgueaJUPKxQIQPvS_zguerYVv8w-Vs2jJc283M2j5z2GOjIHINzIth4bqqVeTfKnLxU_bO8EUBTvPbW9I81tSe33Iu2-opxzHBHP_0gNrUbmkSE0Re2Ke0w87ktNoDdtCisPgQ'

  constructor(private http: HttpClient) { }
  private setHeaders(): HttpHeaders {

    return new HttpHeaders({

      Authorization: this.token,

    });

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
}