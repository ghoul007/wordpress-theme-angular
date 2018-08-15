import { Injectable } from '@angular/core';
import { WindowService } from "./window.service";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  private api_url: any;
  constructor(private win: WindowService, private http: HttpClient) {
    this.api_url =
      (this.win.nativeWindow.api_settings) ? this.win.nativeWindow.api_settings.root + "wp/v2/" : 'http://172.22.0.4/wp-json/wp/v2/'
  }


  getPosts() {
    return this.http.get(this.api_url + 'posts')
  }

  getPost(post_id) {
    return this.http.get(this.api_url + 'posts/' + post_id)
  }

  getPage(page_id) {
    return this.http.get(this.api_url + 'pages/' + page_id)

  }

  getPostBySlug(post_slug) {
    return this.http.get(this.api_url + 'posts/?slug=' + post_slug)
  }

}
