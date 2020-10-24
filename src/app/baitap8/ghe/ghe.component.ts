import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
@Input() ghe;
@Output() onSelect = new EventEmitter()

dangDat:boolean = false;
  constructor() { }
datGhe(){
  this.dangDat = !this.dangDat
  this.onSelect.emit({...this.ghe, dangDat:this.dangDat})
}
  ngOnInit(): void {
  }
  
}
