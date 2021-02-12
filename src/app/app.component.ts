import { Component } from '@angular/core';
import {ComicService} from "./services/comic.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudcomic';
  comics:any=[];

  constructor(
    private Comic:ComicService
  ) {
  }
  ngOnInit(){
    this.comics=this.Comic.comics;
  }

}
