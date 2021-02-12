import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { ComicNewComponent } from './comic-new/comic-new.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import {ComicService} from "./services/comic.service";
import { HomeComponent } from './home/home.component';
import {ComicModifComponent} from "./comic-modif/comic-modif.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";

const appRoutes=[
  {
    path:'comics',
    component:ComicListComponent
  },
  {
    path:'new',
    component:ComicNewComponent
  },
  {
    path:'modif/:id',
    component:ComicModifComponent
  },
  {
    path:'',
    component:HomeComponent
  },

]
@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicNewComponent,
    ComicListComponent,
    ComicModifComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ComicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
