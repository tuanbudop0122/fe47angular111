import { AuthenticationService } from 'src/app/core/sevices/authentication.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {}
  title = 'fe47-angular';
  ngOnInit(): void {
    this.auth.initCurrentUser();
  }
}
