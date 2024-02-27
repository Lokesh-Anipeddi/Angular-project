import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
   
  private baseurl="https://sheetdb.io/api/v1/jkd3yew5mg2us";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Food[]>{
  return  this.http.get<Food[]>(this.baseurl);
  }
}
