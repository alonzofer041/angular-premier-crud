import { Component, OnInit } from '@angular/core';
import {ComicService} from "../services/comic.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comic-modif',
  templateUrl: './comic-modif.component.html',
  styleUrls: ['./comic-modif.component.css']
})
export class ComicModifComponent implements OnInit {
  comic:any;
  private id: any;
  private change: boolean=false;

  constructor(
    private Comic:ComicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.id=this.Comic.getComicById(id).id;
    this.comic=this.Comic.getComicById(id).data;
  }
  modif(){
    this.Comic.update(this.comic,this.id).subscribe(()=>{
      this.change=true;
      setTimeout(()=>{
        this.change=false
      },3000);
    })
  }

}
