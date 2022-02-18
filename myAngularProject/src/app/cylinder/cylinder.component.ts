import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderComponent implements OnInit {
  radius:number
  height:number
  area:number
  constructor() {
    this.radius = 0
    this.height = 0
    this.area = 2*22/7*this.radius*(this.radius+this.height)
   }
   onCycCalculate(){
    this.area = this.area = 3.14*this.radius*this.radius*this.height
   }
  ngOnInit(): void {
  }

}
