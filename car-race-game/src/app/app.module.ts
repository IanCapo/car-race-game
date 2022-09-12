import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { RaceTrackComponent } from './components/race-track/race-track.component';
import { RaceTrackFieldComponent } from './components/race-track-field/race-track-field.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RaceTrackComponent,
    RaceTrackFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
