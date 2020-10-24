import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = true;
  url: string =
    'https://i.pinimg.com/564x/34/51/a2/3451a2ebb9c1269890dbb209501cb99e.jpg';
  message: string = 'hello';
  constructor() {}

  ngOnInit(): void {}
}
