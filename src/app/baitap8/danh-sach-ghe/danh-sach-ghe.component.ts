import { EventEmitter, Component, OnInit, Output, ViewChildren, QueryList } from '@angular/core';
import {GheComponent}from "../ghe/ghe.component"
import {GheService} from "src/app/core/sevices/ghe.service"
import { Ghe } from 'src/app/core/models/ghe';
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
@ViewChildren(GheComponent) gheComponents:QueryList<GheComponent> 
//để sử dụng được services phải khai báo trong constructor 
constructor(private gheService : GheService) { }

mangGhe: Ghe[]

@Output() onSelect = new EventEmitter();
//hàm ngOnInit tương đương với componentDidmount bên react
  ngOnInit(): void {
    this.mangGhe = this.gheService.layDanhSachGhe()
  }
  xuLyDatGhe(ghe){
    this.onSelect.emit(ghe)
  }
  xuLyHuyGhe(soGhe:number){
this.gheComponents.forEach((item:GheComponent)=>{
  if(item.ghe.soGhe===soGhe){
    item.dangDat = false
  }
})
  }
 
}
