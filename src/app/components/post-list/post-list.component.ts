import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../../services/rest-api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any = [];
  constructor(private api: RestAPIService) { }

  ngOnInit() {
    this.getPosts();

  }

  getPosts() {
    this.api.getPosts().subscribe(res => {
      this.posts = res
    })
  }

}
