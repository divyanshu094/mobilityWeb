import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VoyagerComponent } from './voyager/voyager.component';
import { PracticesComponent } from './practices/practices.component'; 
import { OurTeamComponent } from './our-team/our-team.component';
import { LoginComponent } from './login/login.component';
import { DataSecurityComponent } from './data-security/data-security.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AdminBlogListComponent } from './admin-blog-list/admin-blog-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'blog-list',
    component: BlogListComponent,
  }, {
    path: 'blog',
    component: BlogComponent,
  },{
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },{
    path: 'voyager',
    component: VoyagerComponent,
  },{
    path: 'practices',
    component: PracticesComponent,
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'data-security',
    component: DataSecurityComponent,
  },
  {
    path: 'admin-blog',
    component: AdminBlogComponent,
  },
  {
    path: 'create-blog',
    component: CreateBlogComponent,
  },
  {
    path: 'admin-blog-list',
    component: AdminBlogListComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxEditorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
