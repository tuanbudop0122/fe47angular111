import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  //curentUserSubject: cập nhật và lưu trữ data

  private curentUserSubject = new BehaviorSubject(null);
  //currentUser: để component có thể subscribe được sự thay đổi
  currentUser = this.curentUserSubject.asObservable();
  constructor(private http: HttpClient) {}
  initCurrentUser() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.curentUserSubject.next(JSON.parse(userInfo));
    }
  }
  dangKy(value: any) {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post(url, { ...value, maNhom: 'GP01' });
  }
  dangNhap(values: any) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, values).pipe(
      tap((result) => {
        console.log(result);
        this.curentUserSubject.next(result);
      })
    );
  }
}
