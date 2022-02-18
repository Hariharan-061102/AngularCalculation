import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
  length:number
  breadth:number
  area:number
  constructor() { 
    this.length = 0
    this.breadth = 0
    this.area = this.length*this.breadth;
  }
  onCalculate(){
    this.area = this.length*this.breadth;
}
  ngOnInit(): void {
  }

}
