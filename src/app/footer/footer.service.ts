import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  getFooter(): Observable<any> {
    return this.http.get('http://localhost:3000/components_footers');
  }
}
