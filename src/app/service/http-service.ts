import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  getSum(){
    return this.http.get("http://192.168.56.1:3000/sum");
  }
}
