import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/sevices/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  xuLyDangNhap() {
    //kiểm tra form có hợp lệ hay không
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;
    //xử lý call api đăng nhập
    console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      next: (result: any) => {
        console.log(result);
        localStorage.setItem('userInfo', JSON.stringify(result));
        if (result.maLoaiNguoiDung === 'KhachHang') {
          this.router.navigate(['/']);
        }
        if (result.maLoaiNguoiDung === 'QuanTri') {
          this.router.navigate(['/']);
        }
      },
      error: (err) => console.log(err.error),
      complete: () => {
        'đăng nhập thành công';
      },
    });
  }
}
