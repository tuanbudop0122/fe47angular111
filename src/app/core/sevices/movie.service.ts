import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesSubject = new BehaviorSubject({
    data: [],
    loading: false,
    error: '',
  });
  movies = this.moviesSubject.asObservable();
  constructor(private http: HttpClient) {}
  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06';
    const state = this.moviesSubject.value;
    this.moviesSubject.next({ ...state, loading: true, error: '' });
    return this.http.get<Movie[]>(url).pipe(
      tap((result) => {
        this.moviesSubject.next({
          ...state,
          data: result,
          loading: false,
          error: '',
        });
      }),
      catchError((err) => {
        this.moviesSubject.next({ ...state, loading: false, error: err.error });
        return throwError(err);
      })
    );
  }
  getMovieDetail(id: number): Observable<any> {
    //cách 1
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`
    //cách 2
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;
    let params = new HttpParams();
    params = params.append('maPhim', id.toString());

    return this.http.get<any>(url, { params });
  }
  getMovieListPaging(currentPage: number, pageSize: number) {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05';
    let params = new HttpParams();
    params = params
      .append('soTrang', currentPage.toString())
      .append('soPhanTuTrenTrang', pageSize.toString());
    return this.http.get(url, { params });
  }
  addMovie(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh';
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    formData.append('maNhom', 'GP05');
    return this.http.post(url, formData);
  }
}
