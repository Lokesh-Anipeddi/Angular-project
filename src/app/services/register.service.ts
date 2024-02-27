import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseurl="https://sheetdb.io/api/v1/36xmnbdi0te8b"
  constructor(private http:HttpClient) { }
  Onclick(register:Register):Observable<any>{
    return this.http.post(this.baseurl,register)
  }
}
