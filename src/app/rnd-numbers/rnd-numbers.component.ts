import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-numbers',
  templateUrl: './rnd-numbers.component.html',
  styleUrls: ['./rnd-numbers.component.css']
})
export class RndNumbersComponent implements OnInit {

  constructor() { this.generaterandom() }

  ngOnInit(): void {
  }

  rndnumber:any = []

  generaterandom(){
    for(var i=0; i<6; i++){
      this.rndnumber.push(Math.floor(Math.random() * 46) + 1);
    }
  }

  result:any;

  resultnum(num:number){
    this.result = num
  }

}
