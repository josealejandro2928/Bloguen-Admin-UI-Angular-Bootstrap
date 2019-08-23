import { AppShareModule } from './../app-share/app-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    FrontendLayoutComponent,
    DashboardComponent,
    UsersComponent,
    PostComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    AppShareModule,
    FrontendRoutingModule,
    CKEditorModule
  ]
})
export class FrontendModule { }
