import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ComicService} from "../services/comic.service";

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  comics:any=[];
  comicSubscription:Subscription;
  constructor(
    private Comic:ComicService
  ) { }

  ngOnInit() {
    this.comicSubscription=this.Comic.comicSubject.subscribe((comicList)=>{
      this.comics=comicList;
    });
    this.Comic.emitComicSubject();
  }
  ngOnDestroy(){
    this.comicSubscription.unsubscribe();
  }
}
