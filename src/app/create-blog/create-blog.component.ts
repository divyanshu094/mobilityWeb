import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar, DEFAULT_TOOLBAR } from 'ngx-editor';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  editor: Editor = new Editor;
  html: any = "";
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
    console.log("1")
  }
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  publishBlog(){
    console.log(this.html);
    
  }
}
