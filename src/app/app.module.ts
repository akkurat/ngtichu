import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { TableViewComponent } from './table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerViewComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
