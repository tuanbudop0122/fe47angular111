import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isShowing: boolean = false;
  isLoggedIn: boolean = false;
  color: string = '';
  dSachSV: any = [
    { hoTen: 'Tuấn', lop: 'FE47' },
    { hoTen: 'Tú', lop: 'FE48' },
    { hoTen: 'Trọng', lop: 'FE49' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
