import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VoyagerComponent } from './voyager/voyager.component';
import { PracticesComponent } from './practices/practices.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataSecurityComponent } from './data-security/data-security.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AdminBlogListComponent } from './admin-blog-list/admin-blog-list.component';

import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    BlogListComponent,
    BlogComponent,
    PrivacyPolicyComponent,
    VoyagerComponent,
    PracticesComponent,
    OurTeamComponent,
    LoginComponent,
    DashboardComponent,
    DataSecurityComponent,
    AdminBlogComponent,
    CreateBlogComponent,
    AdminBlogListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    NgxEditorModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
