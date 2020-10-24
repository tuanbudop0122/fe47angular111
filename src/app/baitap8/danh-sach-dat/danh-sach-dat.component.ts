import { EventEmitter,Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dat',
  templateUrl: './danh-sach-dat.component.html',
  styleUrls: ['./danh-sach-dat.component.scss']
})
export class DanhSachDatComponent implements OnInit {
@Output() onRemove = new EventEmitter()
mangGheDaDat:any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  xuLyDatGhe(ghe:any){
    if(ghe.dangDat){
      this.mangGheDaDat.push(ghe)
    }
    else{
      const index = this.mangGheDaDat.findIndex(item => item.soGhe === ghe.soGhe)
      if(index !== -1){this.mangGheDaDat.splice(index,1)}
    }
  }
//Xóa ghê ra khỏi mảng ghế đã đặt
//output số ghế ra Cha
xuLyHuyGhe(soGhe:number){
    const index = this.mangGheDaDat.findIndex(item => item.soGhe === soGhe)
    if(index !== -1){this.mangGheDaDat.splice(index,1)}
    this.onRemove.emit(soGhe)
}
}
