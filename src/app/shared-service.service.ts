import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  private dataSubject = new Subject<string>();
  data$ = this.dataSubject.asObservable();

  sendDataToParent(data: string) {
    this.dataSubject.next(data);
  }
}
