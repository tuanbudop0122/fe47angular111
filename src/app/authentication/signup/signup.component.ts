import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/sevices/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthenticationService) {}
  @ViewChild('signupForm') signupForm: NgForm;
  ngOnInit(): void {}
  xuLyDangKy(signupForm: NgForm) {
    //kiểm tra form có hợp lệ hay không
    if (signupForm.invalid) return;
    //call api đăng ký
    this.auth.dangKy(signupForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err.error);
      },
      complete: () => {
        console.log('đăng ký thành công');
      },
    });
  }
  checkDirtyForm() {
    return this.signupForm.dirty;
  }
}
