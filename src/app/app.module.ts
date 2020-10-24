import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { AttributeDirectivesModule } from './attribute-directives/attribute-directives.module';
import { Baitap5Module } from './baitap5/baitap5.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { InteractionModule } from './interaction/interaction.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthenticationInterceptor } from './core/interceptors/authentication.interceptor';
//có nhiều loại module
//1.Module do angular cung cấp: FormsModule, RouterModule...
//2.Module do dev tự định nghĩa.

import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Baitap1Component } from './baitap1/baitap1.component';
// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Component } from './baitap8/baitap8.component';
const routes: Routes = [
  //khi dùng router load module, không cần khai báo module trong phần imports:[]
  // {path:'', loadChildren:() =>MainModule},
  // {path:'admin', loadChildren:() =>AdminModule},
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  //khai báo component sẽ được module quản lý
  declarations: [AppComponent, DemoComponent],
  //khai báo các module sẽ được sử dụng
  //ngoại trừ AppModule đã được import ở main.ts
  //Tất cả các module khác đều phải được import mới sử dụng được
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes), // bắt buộc phải có để routing
    // Baitap1Module,
    // Baitap2Module,
    FormsModule, BrowserAnimationsModule,
    // StructuralDirectivesModule,
    // AttributeDirectivesModule,
    // Baitap5Module,
    // Baitap6Module,
    // InteractionModule,
    // Baitap8Module
  ],
  //nơi gắn các services vào
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  //khai báo để AppComponent là component chạy đầu tiên của module
  bootstrap: [AppComponent],
})
export class AppModule {}
