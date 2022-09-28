import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { RaceTrackComponent } from './components/race-track/race-track.component';
import { RaceTrackFieldComponent } from './components/race-track-field/race-track-field.component';
import { PlayerComponent } from './components/player/player.component';
import { DiceRollComponent } from './components/dice-roll/dice-roll.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuestionsPopupComponent } from './components/questions-popup/questions-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RaceTrackComponent,
    RaceTrackFieldComponent,
    PlayerComponent,
    DiceRollComponent,
    QuestionsPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
