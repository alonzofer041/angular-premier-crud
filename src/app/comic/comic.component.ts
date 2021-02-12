import {Component, Input, OnInit} from '@angular/core';
import {ComicService} from "../services/comic.service";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comicName:string;
  @Input() authorName:string;
  @Input() drawerName:string;
  @Input() editoriel:string;
  @Input() picktureLink:string;
  @Input() date:string;
  @Input() issues:number;
  @Input() index: number;
  @Input() id:number
  constructor(
    private Comic:ComicService
  ) { }

  ngOnInit() {
  }
  supr(){
    this.Comic.delete(this.id);
  }

}
