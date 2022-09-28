import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { playerTurn, playScrores, playStatus } from 'src/app/Interfaces/PlayStatus';
import { PlayGroundService } from 'src/app/services/play-ground-service.service';
import { QuestionsPopupComponent } from '../questions-popup/questions-popup.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass'],
})

export class BoardComponent implements OnInit {
  public players = [
    {id: 1, name: 'player1' , position: 0 },
    {id: 2, name: 'player2 ', position: 0 }
   ];

   playStatus?: playStatus;
   playTotalScores?: playScrores;
   playerTurn?: playerTurn;

  constructor(
    private playStatusData: PlayGroundService,
    public dialog: MatDialog) { }

  player1Dice = this.playStatus?.player1DiceScore ?? 1
  player1NewPostion: number = Math.trunc((window.innerWidth / 12) * this.player1Dice)
  player1TotalPosition: number = 0 

  player2Dice = this.playStatus?.player2DiceScore ?? 1
  player2NewPostion: number = Math.trunc((window.innerWidth / 12) * this.player2Dice)
  player2TotalPosition: number = 0 

  ngOnInit(): void {
    this.setStep(1, 2)
    this.playStatusData.currentPlayStatus.subscribe(data => this.playStatus = data)
    this.playStatusData.currentPlayScore.subscribe(data => this.playTotalScores = data)
    this.playStatusData.currentPlayerTurn.subscribe(data => this.playerTurn = data)

  }

  public setStep(playerId: number, step: number) {
    if(playerId > 0) {
      this.players![playerId].position += step;
    }
  }

  transitionEnd(event: Event){
    if (this.playerTurn != null)
      if(this.playerTurn.isPlayer1Turn)
        this.player1TotalPosition += this.player1NewPostion
      else
        this.player2TotalPosition += this.player2NewPostion

    this.dialog.open(QuestionsPopupComponent, {
      minWidth: '600px',
      autoFocus: true,
      disableClose: true
    });
  }

}


