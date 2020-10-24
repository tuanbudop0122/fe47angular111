import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  message: string = "Hello, I'm Tuan";
  search: string = 'search';
  disabled: boolean = false;
  username: string = '';
  email: string = '';
  address: string = '';
  constructor() {}

  ngOnInit(): void {}
  changeMessage(message: string): void {
    this.message = message;
  }
  changeUsername(element: any): void {
    this.username = element.value;
  }
  changeEmail(evt: any): void {
    this.email = evt.target.value;
  }
}
