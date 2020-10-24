import { ShortcutPipe } from './../shared/pipe/shortcut.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipeModule } from '../shared/pipe/pipe.module';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'dangnhap', component: DangnhapComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    DangnhapComponent,
    MovieDetailComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    PipeModule,
  ],
})
export class MainModule {}
