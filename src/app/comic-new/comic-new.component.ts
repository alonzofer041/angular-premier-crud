import { Component, OnInit } from '@angular/core';
import {ComicService} from "../services/comic.service";

@Component({
  selector: 'app-comic-new',
  templateUrl: './comic-new.component.html',
  styleUrls: ['./comic-new.component.css']
})
export class ComicNewComponent implements OnInit {
  public comic:any={
    comicName:null,
    authorName:null,
    drawerName:null,
    date:null,
    editoriel:null,
    issues:null,
    picktureLink:null
  }
  constructor(
    private Comic:ComicService
  ) { }

  ngOnInit() {
  }
  add(){
    this.Comic.saveNewComic(this.comic).subscribe(()=>{
      this.comic={
        comicName:null,
        authorName:null,
        drawerName:null,
        date:null,
        editoriel:null,
        issues:null,
        picktureLink:null
      }
    })
  }
}
