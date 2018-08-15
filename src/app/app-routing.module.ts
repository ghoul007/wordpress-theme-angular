import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListSingleComponent } from './components/post-list-single/post-list-single.component';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts/:id', component: PostSingleComponent},
  {path: 'page/:id', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
