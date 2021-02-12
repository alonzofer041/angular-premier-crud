import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  private comics;
  comicSubject=new Subject<any[]>();

  constructor(
    private db:AngularFirestore
  ) {
    this.getAllComics();
  }
  emitComicSubject(){
    this.comicSubject.next(this.comics.slice());
  }
  getAllComics(){
    return this.db.collection('comics').snapshotChanges().pipe(
      map(changes=>{
        return changes.map(doc=>{
          return{
            id:doc.payload.doc.id,
            data:doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res=>{
      this.comics=res;
      this.emitComicSubject();
    })
  }
  getComicById(id:number){
    for(const comic of this.comics){
      if(comic.id==id){
        return comic;
      }
    }
  }
  saveNewComic(comic:any){
    return new Observable(obs=>{
      this.db.collection('comics').add(comic).then(()=>{
        console.log('success');
        obs.next();
      })
    });
  }
  update(comic:any,id:any){
    return new Observable(obs=>{
      this.db.doc(`comics/${id}`).update(comic);
      obs.next();
    })
  }
  delete(id:any){
    this.db.doc(`comics/${id}`).delete();
  }
}
