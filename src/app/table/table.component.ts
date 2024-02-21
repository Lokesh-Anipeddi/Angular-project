import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 food:Food[]=[];
 constructor(private service:FoodService){}
 ngOnInit():void{
  this.service.onsubmit().subscribe(data => this.food=data);
 }
}
