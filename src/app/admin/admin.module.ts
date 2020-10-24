import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'user', component: UserComponent },
      { path: 'movie', component: MovieComponent },
      { path: 'addmovie', component: AddmovieComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    MovieComponent,
    LayoutComponent,
    AddmovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
