import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from 'src/app/core/sevices/movie.service';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {
  form: FormGroup;
  imgPreview: string | ArrayBuffer = '';
  constructor(private movieService: MovieService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  handleAddMovie() {
    console.log(this.form.value);
    this.movieService.addMovie(this.form.value).subscribe();
  }
  handleChangeFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    this.form.patchValue({ hinhAnh: file });
    //biến đối tượng File thành base64 => có thể gắn vào tag img
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = (e) => {
      console.log(e.target.result);
      this.imgPreview = e.target.result;
    };
  }
}
