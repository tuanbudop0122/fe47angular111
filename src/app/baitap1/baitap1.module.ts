import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap1Component } from './baitap1.component';
import {RouterModule, Routes} from "@angular/router"
const routes: Routes = [
  {path:'',component : Baitap1Component},
]
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    Baitap1Component,
  ],
  imports: [CommonModule, 
    RouterModule.forChild(routes)
  ],
  //exports để sử dụng ở app.component
  exports: [
    // HeaderComponent,
    // SidebarComponent,
    // ContentComponent,
    // FooterComponent,
    // Baitap1Component,
  ],
})
export class Baitap1Module {}
